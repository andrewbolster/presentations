#!/usr/bin/env node

/**
 * Automatically generate the presentations list in index.html
 * Scans for directories with Slidev presentations and extracts metadata
 */

const fs = require('fs');
const path = require('path');

// Parse YAML frontmatter from slides.md
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const frontmatter = {};
  const lines = match[1].split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith("'") && value.endsWith("'")) ||
        (value.startsWith('"') && value.endsWith('"'))) {
      value = value.slice(1, -1);
    }

    frontmatter[key] = value;
  }

  return frontmatter;
}

// Scan for presentation directories
function findPresentations() {
  const presentations = [];
  const items = fs.readdirSync('.', { withFileTypes: true });

  for (const item of items) {
    if (!item.isDirectory()) continue;

    const dirName = item.name;

    // Skip special directories
    if (dirName.startsWith('.') ||
        dirName === 'node_modules' ||
        dirName === 'themes' ||
        dirName === 'dist') {
      continue;
    }

    const slidesMdPath = path.join(dirName, 'slides.md');

    // Check if it's a Slidev presentation (has slides.md)
    if (fs.existsSync(slidesMdPath)) {
      try {
        // Read metadata from slides.md
        const slidesContent = fs.readFileSync(slidesMdPath, 'utf8');
        const frontmatter = parseFrontmatter(slidesContent);

        // Read README if exists for description
        let description = 'Slidev presentation';
        const readmePath = path.join(dirName, 'README.md');
        if (fs.existsSync(readmePath)) {
          const readme = fs.readFileSync(readmePath, 'utf8');
          // Extract first paragraph after title/headers
          const match = readme.match(/##\s+Overview\s*\n\n(.*?)(?:\n\n|$)/s);
          if (match) {
            description = match[1].trim();
          }
        }

        presentations.push({
          id: dirName,
          title: frontmatter.title || dirName,
          author: frontmatter.author || 'Andrew Bolster',
          description: description,
          info: frontmatter.info || '',
          url: `${dirName}/`,
          sourceUrl: `https://github.com/andrewbolster/presentations/tree/main/${dirName}`,
          isDemo: dirName === 'demo'
        });
      } catch (err) {
        console.error(`Error processing ${dirName}:`, err.message);
      }
    }
  }

  // Sort: demos last, others alphabetically
  presentations.sort((a, b) => {
    if (a.isDemo && !b.isDemo) return 1;
    if (!a.isDemo && b.isDemo) return -1;
    return a.title.localeCompare(b.title);
  });

  return presentations;
}

// Generate HTML for presentations list
function generatePresentationHTML(presentations) {
  return presentations.map(pres => `
            <li class="presentation">
                <div class="presentation-title">
                    ${pres.title}
                    ${pres.isDemo ? '<span class="badge demo">Example</span>' : ''}
                </div>
                ${pres.author ? `<div class="presentation-meta">${pres.author}</div>` : ''}
                <div class="presentation-description">
                    ${pres.description}
                </div>
                <div class="presentation-links">
                    <a href="${pres.url}" class="slides">View Slides</a>
                    <a href="${pres.sourceUrl}" class="source">Source</a>
                </div>
            </li>`).join('\n');
}

// Main execution
function main() {
  console.log('Scanning for presentations...');
  const presentations = findPresentations();

  console.log(`Found ${presentations.length} presentation(s):`);
  presentations.forEach(p => console.log(`  - ${p.title} (${p.id})`));

  // Read current index.html
  const indexPath = 'index.html';
  let indexContent = fs.readFileSync(indexPath, 'utf8');

  // Generate new presentation list
  const presentationsHTML = generatePresentationHTML(presentations);

  // Replace the presentations list (between <ul class="presentations"> and </ul>)
  const regex = /(<ul class="presentations">)([\s\S]*?)(<\/ul>)/;
  indexContent = indexContent.replace(regex, `$1\n${presentationsHTML}\n        $3`);

  // Write updated index.html
  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log('✓ Updated index.html with presentation list');
}

main();

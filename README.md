# Presentations

Conference and workshop presentations using [Slidev](https://sli.dev/).

## Structure

```
presentations/
├── .nojekyll           # Disables Jekyll processing for GitHub Pages
├── index.html          # Landing page listing all presentations
├── package.json        # Shared Slidev dependencies
├── README.md
├── demo/               # Example presentation
│   └── slides.md
├── themes/             # Custom Slidev themes (future)
└── [presentation-name]/  # Individual presentations
    └── slides.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
npm install
# or
bun install
```

### Development

To work on a specific presentation:

```bash
# From repository root
npx slidev demo/slides.md

# Or navigate to presentation directory
cd demo
npx slidev slides.md
```

The presentation will be available at http://localhost:3030

### Building for Production

Build a presentation for static hosting:

```bash
# Build specific presentation
npx slidev build demo/slides.md --base /presentations/demo/ --out dist/demo

# The --base flag is important for GitHub Pages subdirectory routing
```

### Exporting

Export to PDF:

```bash
npx slidev export demo/slides.md --output demo.pdf
```

## Creating a New Presentation

1. Create a new directory for your presentation:
```bash
mkdir my-presentation
```

2. Create a `slides.md` file with frontmatter:
```markdown
---
theme: default
title: My Presentation
---

# My First Slide

Content here...
```

3. Build and add to the index page when ready to publish

## GitHub Pages Setup

This repository is configured to serve presentations at:
- https://andrewbolster.info/presentations/

### Important Files

- `.nojekyll` - Prevents GitHub Pages from processing files with Jekyll
- `index.html` - Landing page that lists all available presentations

### Adding a New Presentation to the Index

After building a presentation, update `index.html` to include a link to it.

## Custom Themes

Custom Slidev themes can be added to the `themes/` directory. Each theme should follow the [Slidev theme structure](https://sli.dev/themes/write-a-theme.html).

## Resources

- [Slidev Documentation](https://sli.dev/)
- [Slidev GitHub](https://github.com/slidevjs/slidev)
- [Theme Gallery](https://sli.dev/themes/gallery.html)
- [GitHub Pages Setup Guide](../andrewbolster.github.io/docs/github-pages-project-sites.md)

## License

Presentations content © Andrew Bolster. Code and configurations are open for reuse.

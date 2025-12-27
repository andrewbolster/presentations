# Dr. StrangeBot - RSA Conference 2026

**How I Learned to Stop Worrying and Love Historical Security Data**

Presentation by Andrew Bolster, PhD
Senior Manager of Cybersecurity & R&D, Black Duck

## Overview

This talk challenges the "single pane of glass" approach to security data consolidation and presents a federated data governance model optimized for AI consumption. Using the three-party co-certification framework (Engineering × GRC × Data Science), it demonstrates how organizations can build trust contracts for messy, distributed security data.

## Quick Start

This presentation uses the Black Duck Slidev theme from this repository.

### Local Development

```bash
cd rsa-2026
npm install
npm run dev
```

The presentation will open at `http://localhost:3030`

### Building for Production

```bash
npm run build
```

Generates static files in `dist/` for deployment.

## Export Formats

```bash
npm run export-pdf   # PDF backup for AV systems
npm run export-pptx  # PowerPoint for collaboration
npm run export-png   # Individual slide images
```

## Deployment

This presentation is automatically deployed via GitHub Actions when pushed to main branch.

Live URL: `https://andrewbolster.info/presentations/rsa-2026/`

## Key Features

- **Black Duck Theme**: Custom branded theme with light/dark mode
- **Interactive Diagrams**: Mermaid diagrams for architecture patterns
- **Code Examples**: Syntax-highlighted Python implementation examples
- **Presenter Mode**: Press `P` for notes and timer
- **Drawing Mode**: Press `D` for live annotation

## Content Structure

1. **Hook**: Challenge the "single pane of glass" myth
2. **Problem**: Security data is inherently distributed
3. **Solution**: Three-party co-certification model
4. **Practice**: LLM-powered vulnerability triage case study
5. **Framework**: Practical implementation guide
6. **Theory**: Connection to trust frameworks research
7. **Takeaways**: Federated governance > centralized platforms

## Presenter Notes

Each slide includes speaker notes accessible in presenter mode. Key timing:
- 30 minutes presentation
- 10 minutes Q&A
- Target: RSA Conference 2026 (March, San Francisco)

## Conference Details

- **Event**: RSA Conference 2026
- **Format**: 40-minute track session
- **Audience**: Security decision-makers, technical architects
- **Level**: Intermediate to Advanced

## Contact

- **Email**: andrew@bolster.online
- **Twitter/X**: @Bolster
- **Web**: bolster.online
- **Community**: BSides Belfast, Farset Labs

## License

Content copyright © 2025 Andrew Bolster. Theme uses MIT license (see parent directory).

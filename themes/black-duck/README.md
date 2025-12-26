# Black Duck Slidev Theme

Official Black Duck brand theme for Slidev presentations.

## Features

- Black Duck brand colors and typography
- Roboto font family (Google Fonts)
- Multiple layouts: cover, default, center
- Dark and light slide variants
- Accessible color combinations (WCAG AA/AAA compliant)

## Brand Colors

- **Primary**: Synopsys Purple `#5a2a82`
- **Secondary**: Anchor Blue `#0072a3`
- **Text**: Tar `#281e1e`

## Usage

In your slides.md frontmatter:

```yaml
---
theme: ./themes/black-duck
---
```

## Layouts

### Cover
```markdown
---
layout: cover
---

# Your Title

Your subtitle or content
```

### Default
```markdown
---
layout: default
---

# Slide Title

Content here
```

### Center
```markdown
---
layout: center
---

# Centered Content
```

## Slide Classes

Add custom styling with classes:

- `class: dark` - Dark background with light text
- `class: accent` - Light accent background
- `class: brand` - Purple gradient brand background

## Callouts

Use HTML for callouts:

```html
<div class="callout info">
  Information callout
</div>

<div class="callout success">
  Success message
</div>

<div class="callout warning">
  Warning message
</div>

<div class="callout alert">
  Alert message
</div>
```

## Brand Guidelines

Based on Black Duck Design & Brand specifications:
- Font: Roboto (all weights)
- Tagline: "True Scale Application Security"
- Subheading: "Uncompromised trust in software for the regulated, AI-powered world"

## License

MIT

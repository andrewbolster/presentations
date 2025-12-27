---
theme: ../themes/black-duck
highlighter: shiki
lineNumbers: false
info: |
  ## Black Duck Demo Presentation

  Showcasing the Black Duck Slidev theme with brand colors and typography.
drawings:
  persist: false
transition: slide-left
title: Black Duck Demo
mdc: true
---

<!--
layout: cover
-->

# Black Duck Demo

Showcasing the Black Duck Brand Theme

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# Black Duck Brand Theme

This presentation showcases the Black Duck brand theme for Slidev

## Key Features

- **True Scale Application Security** - Brand colors and typography
- **Roboto Font Family** - Official Black Duck font from Google Fonts
- **Accessible Design** - WCAG AA/AAA compliant color combinations
- **Multiple Layouts** - Cover, default, center, and more
- **Dark & Light Modes** - Flexible presentation styles
- **Code Highlighting** - Beautiful syntax highlighting with brand colors

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>right</kbd> / <kbd>space</kbd>| next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---

# Brand Colors

The theme uses official Black Duck brand colors:

<div class="grid grid-cols-2 gap-4 mt-8">
  <div>
    <h3>Primary Colors</h3>
    <ul>
      <li><strong style="color: #5a2a82;">Dark Purple</strong> - #5a2a82</li>
      <li><strong style="color: #29aae1;">Cyan Blue</strong> - #29aae1</li>
      <li><strong style="color: #105681;">Link Blue</strong> - #105681</li>
      <li><strong style="color: #000000;">Black (Text)</strong> - #000000</li>
    </ul>
  </div>
  <div>
    <h3>Secondary Colors</h3>
    <ul>
      <li><strong style="color: #a0c565;">Green</strong> - #a0c565</li>
      <li><strong style="color: #ff9933;">Orange</strong> - #ff9933</li>
      <li><strong style="color: #ef4923;">Red</strong> - #ef4923</li>
      <li><strong style="color: #686665;">Grey</strong> - #686665</li>
    </ul>
  </div>
</div>

---

# Code Highlighting

The theme includes beautiful code highlighting with brand colors:

```python
def analyze_security_risk(component):
    """
    Analyze security risk for a software component
    using Black Duck security data.
    """
    vulnerabilities = component.get_vulnerabilities()

    risk_score = 0
    for vuln in vulnerabilities:
        if vuln.severity == "CRITICAL":
            risk_score += 10
        elif vuln.severity == "HIGH":
            risk_score += 5

    return {
        "score": risk_score,
        "status": "ALERT" if risk_score > 15 else "OK"
    }
```

---
class: dark
---

# Dark Mode

This slide demonstrates the dark mode variant

- Dark backgrounds with light text
- Maintains brand consistency
- Great for code-heavy presentations
- Uses dark grey background (#3b4254)

```javascript
// Code looks great on dark backgrounds too
const blackDuck = {
  tagline: "True Scale Application Security",
  mission: "Uncompromised trust in software",
  focus: ["AI-powered", "Regulated", "Secure"]
};
```

---
layout: center
class: text-center
---

# Learn More

**Black Duck Theme Documentation**

[Slidev](https://sli.dev) · [Black Duck](https://blackduck.com) · [Theme README](./themes/black-duck/README.md)

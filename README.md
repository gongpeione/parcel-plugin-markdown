# Parcel plugin for markdown

## Usage

```
yarn add --dev parcel-plugin-markdown
```

```javascript
import md from './Markdown.md';
document.body.innerHTML = md;
```

## Marked options

### package.json
```json
// If you want to pass options to marked
{
    "name": "ABC",
    "marked": {
        "breaks": true
    }
}
```

### marked.config.js
```javascript
// you can also create a marked.config.js
// marked options is fully supported in marked.config.js
module.exports = {
  highlight (code, lang) {
    return `[${code}]`;
  }
}
```

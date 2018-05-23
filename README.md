# Parcel plugin for markdown

## Usage

```
yarn add --dev parcel-plugin-markdown
```

```javascript
import md from './Markdown.md';
document.body.innerHTML = md;
```

```json
// package.json
// If you want to pass options to markd
{
    "name": "ABC",
    "markd": {
        "breaks": true
    }
}
```

const { Asset } = require('parcel-bundler');
const marked = require('marked');

module.exports = class MarkdownAsset extends Asset {
    constructor(name, pkg, options) {
        super(name, pkg, options);
        this.type = 'js';
    }

    mdParser (content) {
        return marked(content).trim().split('\n').map(line => `'${line.trim()}\\n'`).join('+');
    }
    
    generate() {
        return {
            js: `module.exports=${this.mdParser(this.contents)}`
        };
    }
}
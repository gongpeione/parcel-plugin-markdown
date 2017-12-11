const { Asset } = require('parcel-bundler');
const marked = require('marked');

module.exports = class MarkdownAsset extends Asset {
    constructor(name, pkg, options) {
        super(name, pkg, options);
        this.type = 'js';
    }

    generate() {
        return {
            js: `module.exports=${marked(this.contents).trim().split('\n').map(line => `'${line.trim()}\\n'`).join('+')}`
        };
    }
}
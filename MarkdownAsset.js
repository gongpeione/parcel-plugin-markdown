const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const marked = require('marked');

module.exports = class MarkdownAsset extends HTMLAsset {
    constructor(name, pkg, options) {
        super(name, pkg, options);
        this.type = 'js';
        this.markdOptions = pkg.markd || {}
    }

    parse(code) {
        this.contents = marked(code, this.markdOptions);
        return super.parse(this.contents);
    }

    generate() {
        return {
            js: `module.exports=\`${super.generate()}\``
        };
    }
}

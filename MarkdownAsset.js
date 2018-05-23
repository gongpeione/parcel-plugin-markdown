const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const marked = require('marked');

module.exports = class MarkdownAsset extends HTMLAsset {
    constructor(name, pkg, options) {
        super(name, pkg, options);
        this.type = 'js';
        this.markedOptions = pkg.marked || {}
    }

    parse(code) {
        this.contents = marked(code, this.markedOptions);
        return super.parse(this.contents);
    }

    generate() {
        return {
            js: `module.exports=\`${super.generate()}\``
        };
    }
}

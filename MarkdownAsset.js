const { Asset } = require('parcel-bundler');
const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const marked = require('marked');
const parse = require('posthtml-parser');
const api = require('posthtml/lib/api');
const render = require('posthtml-render');

module.exports = class MarkdownAsset extends HTMLAsset {
    constructor(name, pkg, options) {
        super(name, pkg, options);
        this.type = 'js';
    }

    parse(code) {
        return super.parse(this.mdParser(code));
    }

    mdParser(content) {
        return marked(content);
    }
    
    generate() {
        let html = this.isAstDirty ? render(this.ast) : this.contents;
        return {
            js: `module.exports=\`${html}\``
        };
    }
}
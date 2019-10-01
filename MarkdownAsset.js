const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const marked = require('marked');

module.exports = class MarkdownAsset extends HTMLAsset {
  async parse (code) {
    const pkg = await this.getPackage();
    const configPath = await this.getConfig(['marked.config.js'], { load: false });
    const config = require(configPath); // Don't clone the config to allow for renderer overrides.
    this.markedOptions = config || pkg.marked || {};
    this.contents = marked(code, this.markedOptions);

    return super.parse(this.contents);
  }
};

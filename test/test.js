const assert = require('assert');
const mdasset = require('../MarkdownAsset');
const Pipeline = require('parcel-bundler/src/Pipeline');
const path = require('path');

describe('MarkdownAsset', function() {
    it('should parse markdown correctly.', async function() {
        const result = '<h1 id="test">Test</h1>\n<h2 id="h2">H2</h2>\n';
        const instance = new mdasset(path.resolve(__dirname, './index.md'), { rootDir: __dirname });
        const pipeline = new Pipeline({});

        await pipeline.processAsset(instance);

        assert.equal(instance.generated[0].value, result);
    });
    it('should parse markdown with images correctly.', async function() {
        const result = '<h1 id="test">Test</h1>\n<h2 id="h2">H2</h2>\n<p><img src="/82341a6c6f03e3af261a95ba81050c0a.jpg" alt=""></p>\n';
        const Parser = require('parcel-bundler/src/Parser');
        const instance = new mdasset(path.resolve(__dirname, './index.img.md'), {
            rootDir: __dirname,
            parser: new Parser(),
            publicURL: '/'
        });
        const pipeline = new Pipeline({});

        await pipeline.processAsset(instance);

        assert.equal(instance.generated[0].value, result);
    });
});

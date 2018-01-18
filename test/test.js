const assert = require('assert');
const mdasset = require('../MarkdownAsset');
const path = require('path');

describe('Markdown', function() {
    describe('Plain Markdown', function() {
        it('should parse markdown correctly.', async function() {
            const result = 'module.exports=`<h1 id="test">Test</h1>\n<h2 id="h2">H2</h2>\n`';
            const instance = new mdasset(path.resolve(__dirname, './index.md'), {}, {});
            const processed = await instance.process();
            
            assert.equal(processed.js, result);
        });
    });
    describe('Markdown with image', function() {
        it('should parse markdown correctly.', async function() {
            const result = 'module.exports=`<h1 id="test">Test</h1>\n<h2 id="h2">H2</h2>\n<p><img src="/2fdf41fd143f7af67e0a6b4c11576a45.jpg" alt=""></p>\n`';
            const parser = require('parcel-bundler/src/Parser');
            const instance = new mdasset(path.resolve(__dirname, './index.img.md'), {}, { 
                parser: new parser(),
                publicURL: '/' 
            });
            const processed = await instance.process();
            assert.equal(processed.js, result);
        });
    });
});
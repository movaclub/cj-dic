const Bundler = require('parcel-bundler');
const Path = require('path');
const { execSync } = require('child_process');

const entryFiles = [
  Path.join(__dirname, './src/index.html'),
  Path.join(__dirname, './src/index.ts'),
  Path.join(__dirname, './index.html')
];

const options = {
  outDir: '..',
  watch: true,
  minify: false
};

(async () => {
  const bundler = new Bundler(entryFiles, options);

  bundler.on('buildEnd', () => {
    const postBuildFile = 'parcel src/index.html';
    console.log(`running: ${postBuildFile}`);
    const stdout = execSync(`${postBuildFile}`);
    // Do things with stdout
  });

  const bundle = await bundler.bundle();
})();

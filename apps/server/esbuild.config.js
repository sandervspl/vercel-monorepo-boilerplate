const path = require('path');
const { fork } = require('child_process');

const DEV = process.env.NODE_ENV === 'development';

// Fork process to start/kill app with
let nodeFork;

function onBuildComplete() {
  if (DEV) {
    require('node-notifier').notify({
      title: 'Monorepo Server',
      message: 'Build complete!',
    });

    // Run app with node
    nodeFork?.kill();
    nodeFork = fork(path.resolve(__dirname, 'dist/index.js'));
  }
}

function build() {
  require('esbuild').build({
    entryPoints: ['index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    platform: 'node',
    target: ['node14'],
    external: Object.keys(require('./package.json').dependencies),
    watch: DEV && {
      onRebuild(err) {
        if (err) {
          console.error('watch build failed:', err);
          process.exit(1);
        }

        console.info('🚀 Rebuild complete!\n');
        onBuildComplete();
      },
    },
  })
    .catch(() => process.exit(1));

  console.info('🚀 Build complete!\n');
  onBuildComplete();
}

build();

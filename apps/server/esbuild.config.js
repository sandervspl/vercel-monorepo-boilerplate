require('esbuild').buildSync({
  entryPoints: ['index.ts'],
  outfile: 'dist/index.js',
  bundle: true,
  platform: 'node',
  target: ['node14'],
});

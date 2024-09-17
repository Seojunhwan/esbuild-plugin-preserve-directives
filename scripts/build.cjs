const esbuild = require('esbuild');

async function build() {
  try {
    Promise.all([
      esbuild.build({
        entryPoints: ['src/index.ts'],
        bundle: true,
        outfile: 'dist/index.js',
        platform: 'node',
        target: 'node18',
        format: 'cjs',
        sourcemap: true,
      }),
      esbuild.build({
        entryPoints: ['src/index.ts'],
        bundle: true,
        outfile: 'dist/index.mjs',
        platform: 'node',
        target: 'node18',
        format: 'esm',
        sourcemap: true,
      }),
    ]);
    console.log('Build success');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();

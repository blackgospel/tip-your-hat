const { build } = require('esbuild')
const { esbuildDecorators } = require('@anatine/esbuild-decorators')
const aliasPlugin = require('esbuild-plugin-path-alias')
const path = require('path')

build({
  entryPoints: {
    index: path.resolve(__dirname, './src/index.ts'),
  },
  outdir: 'build',
  platform: 'node',
  bundle: true,
  sourcemap: true,
  // minify: true,
  target: ['esnext'],
  plugins: [
    esbuildDecorators(),
    aliasPlugin({
      src: path.resolve(__dirname, './src'),
      constants: path.resolve(__dirname, './src/constants'),
      context: path.resolve(__dirname, './src/context'),
      errors: path.resolve(__dirname, './src/errors'),
      helpers: path.resolve(__dirname, './src/helpers'),
      middleware: path.resolve(__dirname, './src/middleware'),
      resolvers: path.resolve(__dirname, './src/resolvers'),
    }),
  ],
  external: ['aws-sdk'],
}).catch(() => process.exit(1))

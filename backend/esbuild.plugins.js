const { esbuildDecorators } = require('@anatine/esbuild-decorators')
const aliasPlugin = require('esbuild-plugin-path-alias')
const path = require('path')

// default export should be an array of plugins
module.exports = [
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
]

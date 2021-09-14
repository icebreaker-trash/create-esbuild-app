// Bundling for node
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { isProd } from './env.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * jsdoc 类似 ts 的写法
 * @typedef {import('esbuild').BuildOptions} BuildOptions
 * @type {BuildOptions}
 */
const config = {
  entryPoints: ['./src/index.js'],
  bundle: true,
  platform: 'node',
  // tencent node latest runtime
  target: ['node12'],
  outfile: path.resolve(__dirname, 'dist', 'index.js'),
  sourcemap: true,
  minify: isProd,
  external: [],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
}
export default config


import esbuild from 'esbuild'
import config from './esbuild.config.js'

import fsp from 'fs/promises'
; (async () => {
  const pkg = JSON.parse(await fsp.readFile('./package.json', {
    encoding: 'utf-8'
  }))

  await esbuild.build(config)

  await fsp.writeFile('dist/package.json', JSON.stringify(
    {
      scripts: {
        start: 'node .'
      },
      dependencies: config.external.reduce((acc, cur) => {
        const v = pkg.dependencies[cur]
        if (v) {
          acc[cur] = v
        }
        return acc
      }, {})
    }
  ))

  console.log(
    'Build OK'
  )
})()

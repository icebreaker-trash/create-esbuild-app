#!/usr/bin/env node

import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
// import fsp from 'fs/promises'
import fs from 'fs-extra'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const currentDir = process.cwd()

const templetePath = path.resolve(__dirname, '../src/templete')

  ; (async () => {
  await fs.copy(templetePath, currentDir)
  console.log('ok')
})()

import { fileURLToPath } from 'node:url'
import { afterAll, bench, describe } from 'vitest'
import { join, normalize } from 'pathe'
import { withoutTrailingSlash } from 'ufo'
import { loadNuxt, writeTypes } from '@nuxt/kit'

describe('writeTypes', async () => {
  const relativeDir = join('../../..', 'test/fixtures/basic-types')
  const path = withoutTrailingSlash(normalize(fileURLToPath(new URL(relativeDir, import.meta.url))))

  const nuxt = await loadNuxt({ cwd: path })
  afterAll(async () => {
    await nuxt.close()
  })

  bench('writeTypes in the basic-types fixture', async () => {
    await writeTypes(nuxt)
  })
})

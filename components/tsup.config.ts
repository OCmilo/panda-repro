import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/preset/preset.ts'],
  target: 'es2020',
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  dts: true,
  bundle: true,
  treeshake: true,
  external: ['@huspy/briks-web-styled-system']
})

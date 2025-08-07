import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  target: 'es2020',
  platform: 'browser',
  clean: true,
  sourcemap: true,
  // external: ['@emotion/react', '@emotion/styled']
})
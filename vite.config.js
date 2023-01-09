import { createVuePlugin } from 'vite-plugin-vue2';
import { defineConfig } from 'vite';
import path from 'path';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';


export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: ''
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ],
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue'
    ]
  },
  plugins: [createVuePlugin(), viteCommonjs()],
})

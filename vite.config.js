import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypePrettyCode from 'rehype-pretty-code';

export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  mdx({
    rehypePlugins: [rehypePrettyCode],
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxFrontmatter
    ]
  }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})







import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
// traz a augmentação de tipo que adiciona `ssgOptions` ao UserConfig do Vite
import type {} from 'vite-react-ssg'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },

  build: {
    target: 'es2022',
    cssCodeSplit: true,
    // as fotos já são otimizadas por scripts/generate-assets.mjs e vivem em
    // public/ — nada de imagem passa pelo bundler
    assetsInlineLimit: 2048,
  },

  ssgOptions: {
    // gera projetos/index.html em vez de projetos.html: URLs sem extensão
    // funcionam em qualquer host, com ou sem rewrite
    dirStyle: 'nested',
    // 'none' mantém o HTML como sai do renderToString — já é uma linha só
    formatting: 'none',
    script: 'async',
    // 404.html é gerado a partir da rota curinga
    includedRoutes: (paths) => paths.filter((p) => !p.includes('*')).concat('/404'),
  },
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        speakers: resolve(__dirname, 'speakers.html'),
        agenda: resolve(__dirname, 'agenda.html'),
        sponsors: resolve(__dirname, 'sponsors.html'),
        exhibitors: resolve(__dirname, 'exhibitors.html'),
        registration: resolve(__dirname, 'registration.html'),
        blog: resolve(__dirname, 'blog.html'),
        media: resolve(__dirname, 'media.html'),
        faqs: resolve(__dirname, 'faqs.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html')
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
});

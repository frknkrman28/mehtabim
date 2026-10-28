import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // GitHub Pages ve alt dizinlerle %100 uyumlu göreceli yollar
  server: {
    port: 3000,
    open: true
  }
});

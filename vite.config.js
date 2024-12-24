import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Manikandan-Portfolio/',
  plugins: [react(), svgr()],
  server: {
    port: 3000,
  }
})

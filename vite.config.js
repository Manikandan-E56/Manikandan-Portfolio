import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/Manikandan-Portfolio/',
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [react(), svgr(),tailwindcss(),],
  server: {
    port: 3000,
  }
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/luoyuzhixue_ai_teach_front_web/',
  plugins: [react(), tailwindcss()],
});

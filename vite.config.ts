import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true, // Не пытаться использовать другой порт если 5173 занят
    hmr: {
      // Разрешить подключения HMR из любых источников (для поддержки поддомена poehali.dev)
      clientPort: 443, // Используем 443 для HTTPS
      host: 'preview--recruiter-site-project.poehali.dev', // Используем домен проекта
      protocol: 'wss', // Используем защищенное соединение
    },
    cors: true,
    // Убираем наложение ошибок, чтобы улучшить отладку
    watch: {
      usePolling: true,
    }
  },
});

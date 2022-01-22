import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, './src')}`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.ts$/],
    }),
  ],
  test: {
    global: true,
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/*': path.resolve(__dirname, './src/*'),
      '@app': path.resolve(__dirname, './src/app'),
      '@app/*': path.resolve(__dirname, './src/app/*'),
      '@task-1': path.resolve(__dirname, './src/app/task-1'),
      '@task-1/*': path.resolve(__dirname, './src/app/task-1/*'),
      '@task-2': path.resolve(__dirname, './src/app/task-2'),
      '@task-2/*': path.resolve(__dirname, './src/app/task-2/*'),
    },
  },
});

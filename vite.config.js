import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change if needed
    open: true,
    hmr: true,  // Ensures Hot Module Reloading is enabled
    watch: {
      usePolling: true, // Fix for file changes not detected in some cases
    },
  },
});
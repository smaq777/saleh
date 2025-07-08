import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: ['.replit.dev', '.replit.com', '.replit.app', 'bd8407e2-c2fa-488f-8d14-f35dc6c10bbf-00-2un6g6t6784qh.worf.replit.dev']
  }
});
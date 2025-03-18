import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { Buffer } from 'buffer'; // Import Buffer polyfill

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: 'crypto-browserify', // Polyfill crypto
      buffer: 'buffer', // Polyfill Buffer
    },
  },
  define: {
    'process.env': {}, // Shim process.env
    global: 'globalThis', // Ensure global is defined
  },
  esbuild: {
    jsxInject: `import { Buffer } from 'buffer'; globalThis.Buffer = Buffer;`, // Inject Buffer globally
  },
});
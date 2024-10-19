import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// export default {
//   server: {
//     host: '0.0.0.0'
//   }
// }


export default defineConfig({
  server: {
    proxy: {
      '/api/maps': {
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/maps/, '/maps/api'),
        onProxyReq: (proxyReq) => {
          proxyReq.setHeader('Access-Control-Allow-Origin', '*');
        },
      },
    },
  },
});

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({ registerType: 'autoUpdate',
    manifest: {
      name: 'OpenBridge Demo',
      short_name: 'OpenBridge',
      description: 'Demo of OpenBridge WebComponent',
      theme_color: '#fcfcfc',
    } }),
    vue({
      script: {
        defineModel: true
      },
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('obc-') || tag.includes('obi-')
        }
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})


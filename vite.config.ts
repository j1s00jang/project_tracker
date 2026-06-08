import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { openDevBrowser } from './scripts/open-dev-browser.mjs'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function openDesignBrowser() {
  let opened = false

  return {
    name: 'open-design-browser',
    configureServer(server) {
      server.httpServer?.once('listening', () => {
        if (opened || process.env.VITE_NO_OPEN === '1') return
        opened = true

        const url = server.resolvedUrls?.local[0]
        if (!url) return

        openDevBrowser(url).catch((error) => {
          server.config.logger.warn(
            `Could not open Chrome at 1440x1024: ${error instanceof Error ? error.message : String(error)}`,
          )
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    openDesignBrowser(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * `vite preview` serves the SPA fallback for every unknown path, which would
 * hand back the home page for /pricing and hide whether prerendering worked.
 * Vercel (cleanUrls) checks the filesystem first, so resolve /foo to
 * dist/foo/index.html ahead of the fallback and keep preview honest.
 */
function servePrerenderedRoutes(): PluginOption {
  return {
    name: 'serve-prerendered-routes',
    configurePreviewServer(server) {
      const outDir = path.resolve(import.meta.dirname, 'dist')
      server.middlewares.use((req, _res, next) => {
        const pathname = (req.url ?? '/').split('?')[0]
        if (pathname !== '/' && !path.extname(pathname)) {
          const candidate = path.join(outDir, pathname, 'index.html')
          if (fs.existsSync(candidate)) {
            req.url = `${pathname.replace(/\/$/, '')}/index.html`
          }
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), servePrerenderedRoutes()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})

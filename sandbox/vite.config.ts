import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const src = path.resolve(__dirname, '../src')

export default defineConfig({
	// Keep root at the project root so Tailwind v4 scans src/ correctly
	plugins: [tailwindcss(), react()],
	resolve: {
		alias: {
			'@': src,
		},
	},
	server: {
		port: 5174,
		open: '/sandbox/index.html',
	},
})

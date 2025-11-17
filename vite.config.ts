/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from 'vite';
import { resolve } from 'node:path'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// https://vite.dev/config/
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';


const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths()
	],
	build: {
		// Enable source maps for easier debugging in consuming projects
		sourcemap: true,
		// Specify the file where all built components will reside
		lib: {
			entry: resolve(dirname, 'src/index.ts'),
			name: 'DesignSystem', // The global name for the UMD build
			fileName: (format) => `design-system.${format}.js`, // Naming convention
		},
		rollupOptions: {
			// 1. Mark external dependencies to prevent them from being bundled
			external: ['react', 'react-dom', 'tailwindcss', 'lucide-react'],
			output: {
				// 2. Configure UMD/IIFE global variables for the externals
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					tailwindcss: 'tailwindcss',
				},
			},
		},
	},
	test: {
		projects: [{
			extends: true,
			plugins: [
				// The plugin will run tests for the stories defined in your Storybook config
				// See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
				storybookTest({
					configDir: path.join(dirname, '.storybook')
				})],
			test: {
				name: 'storybook',
				browser: {
					enabled: true,
					headless: true,
					provider: playwright({}),
					instances: [{
						browser: 'chromium'
					}]
				},
				setupFiles: ['.storybook/vitest.setup.ts']
			}
		}]
	}
});

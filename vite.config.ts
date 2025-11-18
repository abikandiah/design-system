/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';


const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [
		react({
			jsxRuntime: 'automatic'
		}),
		tsconfigPaths()
	],
	build: {
		// Enable source maps for easier debugging in consuming projects
		sourcemap: true,

		// CRITICAL FIX: Re-enable lib mode with the dummy src/index.ts.
		// This stabilizes Rollup's internal state, preventing the "preserveEntrySignatures" error.
		lib: {
			entry: path.resolve(dirname, 'src/index.ts'),
			fileName: 'index'
		},
		rollupOptions: {
			preserveEntrySignatures: 'strict',

			// Find all 'index.ts' files inside component directories (e.g., src/Button/index.ts)
			input: Object.fromEntries(
				glob.sync('src/**/index.ts', { ignore: 'src/index.ts' }) // Ignore the top-level index.ts
					.map(file => {
						const moduleName = path.relative('src', file)
							.replace(path.extname(file), '') // Remove .ts
							.replace(path.sep + 'index', ''); // Remove /index
						// Key is the module name (e.g., 'Button', 'Card')
						// Value is the path to the source file
						return [moduleName, file];
					})
			),

			// Mark external dependencies
			external: [
				'react',
				'react-dom',
				'tailwindcss',
				'lucide-react',

				// Explicitly externalize deep JSX runtime paths ***
				'react/jsx-runtime',
				'react/jsx-dev-runtime',

				// Common dependencies that should be externalized in a component library
				'clsx',
				'tailwind-merge',
				'class-variance-authority',
				'embla-carousel',
				'embla-carousel-react',
				/^@radix-ui\/.*/,      // Externalize all Radix UI packages
				/^@floating-ui\/.*/,   // Externalize all Floating UI packages
				/^react-remove-scroll\/.*/, // Externalize packages with deep paths
				'react-remove-scroll',
				'react-remove-scroll-bar',
				'use-callback-ref',
				'use-sidecar',
				'aria-hidden',
				'get-nonce',
			],

			output: [{
				exports: 'named',
				entryFileNames: '[name].js',

				// *** CRUCIAL SETTINGS FOR DEEP EXPORTS ***
				// 1. Preserve the folder structure to create individual component files
				preserveModules: true,
				preserveModulesRoot: 'src',

				// 2. Set the output directory (must match your tsconfig/package.json)
				dir: 'dist',
				// 3. Define the output format (ESM for tree-shaking)
				format: 'es',
			}],
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

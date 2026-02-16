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

// --- 1. Define all entries using a single, robust glob pattern ---
const componentAndModuleEntries = Object.fromEntries(
	// Find all index.ts files inside nested folders (components/, hooks/, etc.)
	glob.sync('src/**/index.ts', {
		// Exclude the root index.ts file
		ignore: ['src/index.ts']
	})
		.map(file => {
			// Calculate the module name used for the output file path.
			// 1. Remove the 'src/' prefix (path.relative('src', file)).
			// 2. Remove the '/index.ts' suffix.
			const moduleName = path.relative('src', file)
				.replace(path.extname(file), '') // Remove .ts
				.replace(path.sep + 'index', ''); // Remove the final '/index'

			// This should result in names like:
			// 'components/Button'
			// 'hooks/use-mobile'
			// 'types'
			// 'constants'
			// 'utils'

			return [moduleName, file];
		})
);

// We no longer need to manually define the core entry points, 
// as they should be picked up by the glob:
// 'types' -> src/types/index.ts
// 'constants' -> src/constants/index.ts
// 'utils' -> src/utils/index.ts
const finalInput = {
	...componentAndModuleEntries,

	// We only explicitly define the root entry, which is the dummy file.
	// This is the only file that must resolve to './dist/index.js'
	'index': path.resolve(dirname, 'src/index.ts'),
};

// --------------------------------------------------------------------------------------

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

		// CRITICAL: Keep lib mode with the dummy src/index.ts. 
		// This is necessary to activate library mode correctly.
		lib: {
			entry: path.resolve(dirname, 'src/index.ts'),
			fileName: 'index'
		},
		rollupOptions: {
			preserveEntrySignatures: 'strict',

			// --- USE THE CLEANED-UP INPUT MAP TO DRIVE THE BUILD ---
			input: finalInput,

			// Mark external dependencies
			external: [
				'react',
				'react-dom',
				'tailwindcss',
				'lucide-react',

				// Explicitly externalize deep JSX runtime paths
				'react/jsx-runtime',
				'react/jsx-dev-runtime',

				// Common dependencies that should be externalized
				'clsx',
				'tailwind-merge',
				'class-variance-authority',
				'embla-carousel',
				'embla-carousel-react',
				'sonner',
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

				// Put all shared, automatically generated chunks 
				// into a specific, non-polluting subdirectory to prevent naming 
				// conflicts with entry files like Button.js.
				chunkFileNames: 'shared/[name].js',

				dir: 'dist',
				format: 'es',
			}],
		},
	},

	// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
	test: {
		projects: [
			{
				extends: true,
				test: {
					name: 'unit',
					include: ['src/**/*.test.{ts,tsx}'],
					environment: 'node',
				}
			},
			{
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
			}
		]
	}
});

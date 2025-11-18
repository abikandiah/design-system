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
// This pattern captures all component and hook entry points (all `index.ts` files 
// that are *not* the core utility/root files).
const componentAndModuleEntries = Object.fromEntries(
    glob.sync('src/**/index.ts', { 
        // Exclude the root entry file and the utility/type entry files, as these 
        // will be added manually below. This avoids duplicating inputs and ensures 
        // predictable naming for these core files.
        ignore: [
            'src/index.ts', 
            'src/types/index.ts', 
            'src/constants/index.ts', 
            'src/utils/index.ts'
        ] 
    })
    .map(file => {
        const moduleName = path.relative('src', file)
            .replace(path.extname(file), '') // Remove .ts
            // Remove the '/index' suffix to get the final published name (e.g., 'components/Button')
            .replace(path.sep + 'index', ''); 
        return [moduleName, file];
    })
);

// Combine the glob results with all the essential, hand-defined library entry points
const finalInput = {
    ...componentAndModuleEntries,
    
    // Core entry points needed for package.json exports
    'index': path.resolve(dirname, 'src/index.ts'), 
    'types': path.resolve(dirname, 'src/types/index.ts'),
    'constants': path.resolve(dirname, 'src/constants/index.ts'),
    'utils': path.resolve(dirname, 'src/utils/index.ts'), 
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

				// Suppress content hashing on shared chunks
				chunkFileNames: '[name].js',

				dir: 'dist',
				format: 'es',
			}],
		},
	},

	// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
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

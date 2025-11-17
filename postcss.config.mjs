/**
 * PostCSS Configuration
 *
 * This configuration uses the required ES Module default export format and
 * loads the Tailwind CSS plugin from its new location (@tailwindcss/postcss)
 * which is necessary for Tailwind CSS v4+ builds.
 */
import tailwindcss from '@tailwindcss/postcss'; // Import the new plugin
import autoprefixer from 'autoprefixer'; // Import Autoprefixer

export default {
	plugins: [
		// 1. Load the imported Tailwind CSS plugin
		tailwindcss,

		// 2. Load the imported Autoprefixer plugin
		autoprefixer,

		// Note: PostCSS v8+ prefers the array format for plugins
	],
};

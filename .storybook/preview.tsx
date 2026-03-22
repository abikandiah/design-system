import type { Decorator, Preview } from '@storybook/react-vite';
import { useEffect } from 'react';
import "../src/styles.css";
import "../src/themes/steel.css";
import "../src/themes/linen.css";
import "../src/themes/sage.css";
import "../src/themes/dusk.css";

const withThemeDecorator: Decorator = (Story, context) => {
	const { theme = 'steel', colorMode = 'light' } = context.globals;
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		document.documentElement.classList.toggle('dark', colorMode === 'dark');
		return () => {
			document.documentElement.removeAttribute('data-theme');
			document.documentElement.classList.remove('dark');
		};
	}, [theme, colorMode]);
	return <Story />;
};

const preview: Preview = {
	globalTypes: {
		theme: {
			description: 'Component theme',
			toolbar: {
				title: 'Theme',
				icon: 'paintbrush',
				items: [
					{ value: 'steel', title: 'Steel' },
					{ value: 'linen', title: 'Linen' },
					{ value: 'sage', title: 'Sage' },
					{ value: 'dusk', title: 'Dusk' },
				],
				dynamicTitle: true,
			},
		},
		colorMode: {
			description: 'Color mode',
			toolbar: {
				title: 'Color Mode',
				icon: 'sun',
				items: [
					{ value: 'light', title: 'Light', icon: 'sun' },
					{ value: 'dark', title: 'Dark', icon: 'moon' },
				],
				dynamicTitle: true,
			},
		},
	},
	initialGlobals: {
        theme: 'steel',
        colorMode: 'light',

        backgrounds: {
            value: "white"
        }
    },
	decorators: [withThemeDecorator],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'error'
		},
		backgrounds: {
            options: {
                white: { name: 'White', value: '#ffffff' },
                slate: { name: 'Slate', value: '#f1f5f9' },
                dark: { name: 'Dark', value: '#1e1e2e' }
            }
        },
	},
};

export default preview;

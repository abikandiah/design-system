import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

addons.setConfig({
	theme: create({
		base: 'light',
		brandTitle: 'Abumble Design System',
		brandTarget: '_self',
		colorPrimary: '#334a6e',
		colorSecondary: '#334a6e',
	}),
});

import { ThemeSelector } from "@/components/ThemeSelector";
import { ThemeProvider } from "@/themes";
import type { Decorator, Meta, StoryObj } from "@storybook/react";

const withThemeProvider: Decorator = (Story) => (
	<ThemeProvider>
		<Story />
	</ThemeProvider>
);

const meta: Meta<typeof ThemeSelector> = {
	title: "Components/ThemeSelector",
	component: ThemeSelector,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	decorators: [withThemeProvider],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="flex flex-col items-center gap-4">
			<ThemeSelector />
			<p className="text-sm text-muted-foreground">
				Switches between Steel and Linen color themes. Note: interacts with the page's theme
				independently from the Storybook toolbar.
			</p>
		</div>
	),
};

export const InContext: Story = {
	render: () => (
		<div className="flex items-center gap-3 rounded-md border px-4 py-2 bg-background">
			<span className="text-sm font-medium text-foreground">Color theme</span>
			<ThemeSelector />
		</div>
	),
};

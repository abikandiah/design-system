import { BeeLogo } from "@/components/BeeLogo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BeeLogo> = {
	title: "Components/BeeLogo",
	component: BeeLogo,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: "#",
	},
};

export const WithLabel: Story = {
	render: () => (
		<BeeLogo href="#">
			<span className="ml-2 font-semibold text-foreground">Abumble</span>
		</BeeLogo>
	),
};

export const HoverAnimation: Story = {
	render: () => (
		<div className="flex flex-col items-center gap-4 text-center">
			<BeeLogo href="#" />
			<p className="text-sm text-muted-foreground">Hover over the logo to see the animation</p>
		</div>
	),
};

export const AsChild: Story = {
	render: () => (
		<div className="flex flex-col items-center gap-2 text-center">
			<BeeLogo asChild>
				{/* Simulating a router Link with a plain <a> */}
				<a href="#home" />
			</BeeLogo>
			<p className="text-sm text-muted-foreground">Using asChild to render a custom element (e.g. router Link)</p>
		</div>
	),
};

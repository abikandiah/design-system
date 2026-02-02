import { Separator } from "@/components/Separator";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Separator> = {
	title: "Components/Separator",
	component: Separator,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			control: "radio",
			options: ["horizontal", "vertical"],
		},
		decorative: { control: "boolean" },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<div className="w-[300px]">
			<div className="space-y-1">
				<h4 className="text-sm font-medium">Section above</h4>
				<p className="text-muted-foreground text-sm">
					Content above the separator.
				</p>
			</div>
			<Separator {...args} className="my-4" />
			<div className="space-y-1">
				<h4 className="text-sm font-medium">Section below</h4>
				<p className="text-muted-foreground text-sm">
					Content below the separator.
				</p>
			</div>
		</div>
	),
};

export const Vertical: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<div className="flex h-20 items-center gap-4">
			<span>Item 1</span>
			<Separator {...args} />
			<span>Item 2</span>
			<Separator {...args} />
			<span>Item 3</span>
		</div>
	),
};

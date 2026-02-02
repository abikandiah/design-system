import { Button } from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { Loader2, Mail } from "lucide-react";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
		},
		disabled: { control: "boolean" },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Button",
		variant: "outline",
		size: "default",
	},
};

export const Primary: Story = {
	args: {
		children: "Primary",
		variant: "default",
	},
};

export const Destructive: Story = {
	args: {
		children: "Destructive",
		variant: "destructive",
	},
};

export const Outline: Story = {
	args: {
		children: "Outline",
		variant: "outline",
	},
};

export const Secondary: Story = {
	args: {
		children: "Secondary",
		variant: "secondary",
	},
};

export const Ghost: Story = {
	args: {
		children: "Ghost",
		variant: "ghost",
	},
};

export const Link: Story = {
	args: {
		children: "Link",
		variant: "link",
	},
};

export const Sizes: Story = {
	render: () => (
		<div className="flex flex-wrap items-center gap-4">
			<Button size="sm">Small</Button>
			<Button size="default">Default</Button>
			<Button size="lg">Large</Button>
			<Button size="icon">
				<Mail className="size-4" />
			</Button>
		</div>
	),
};

export const WithIcon: Story = {
	args: {
		children: (
			<>
				<Mail className="size-4" />
				Login with Email
			</>
		),
		variant: "default",
	},
};

export const Loading: Story = {
	args: {
		children: (
			<>
				<Loader2 className="size-4 animate-spin" />
				Please wait
			</>
		),
		disabled: true,
	},
};

export const Disabled: Story = {
	args: {
		children: "Disabled",
		disabled: true,
	},
};

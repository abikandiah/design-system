import { Badge } from "@/components/Badge";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "secondary", "success", "warning", "destructive", "outline"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: "Badge", variant: "default" } };
export const Secondary: Story = { args: { children: "Secondary", variant: "secondary" } };
export const Success: Story = { args: { children: "Success", variant: "success" } };
export const Warning: Story = { args: { children: "Warning", variant: "warning" } };
export const Destructive: Story = { args: { children: "Destructive", variant: "destructive" } };
export const Outline: Story = { args: { children: "Outline", variant: "outline" } };

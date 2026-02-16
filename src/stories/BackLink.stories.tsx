import { BackLink } from "@/components/BackLink";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BackLink> = {
	title: "Components/BackLink",
	component: BackLink,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Back to properties",
		href: "#",
	},
};

import { PageHeader, PageDescription } from "@/components/PageHeader";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PageHeader> = {
	title: "Components/PageHeader",
	component: PageHeader,
	parameters: { layout: "padded" },
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["default", "sm"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { children: "Page Title" },
};

export const Small: Story = {
	args: { children: "Page Title", size: "sm" },
};

export const WithDescription: Story = {
	render: () => (
		<div className="space-y-2">
			<PageHeader>Dashboard</PageHeader>
			<PageDescription>Welcome to your application dashboard.</PageDescription>
		</div>
	),
};

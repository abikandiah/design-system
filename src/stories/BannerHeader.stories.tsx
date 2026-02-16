import { BannerHeader } from "@/components/BannerHeader";
import { Button } from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BannerHeader> = {
	title: "Components/BannerHeader",
	component: BannerHeader,
	parameters: { layout: "padded" },
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Property Details",
		description: "View and edit property information",
	},
};

export const WithBackLink: Story = {
	args: {
		title: "Property Details",
		description: "View and edit property information",
		backLink: { label: "Back to properties", to: "#" },
	},
};

export const WithBreadcrumbs: Story = {
	args: {
		title: "Unit 4A",
		description: "Apartment details and tenant information",
		breadcrumbItems: [
			{ label: "Properties", to: "#" },
			{ label: "Sunset Apartments", to: "#" },
		],
	},
};

export const WithActions: Story = {
	args: {
		title: "Property Details",
		description: "View and edit property information",
		actions: <Button variant="outline" size="sm">Edit</Button>,
	},
};

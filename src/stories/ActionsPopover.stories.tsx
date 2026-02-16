import { ActionsPopover } from "@/components/ActionsPopover";
import { Edit, Trash2, Copy } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ActionsPopover> = {
	title: "Components/ActionsPopover",
	component: ActionsPopover,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: [
			{ label: "Edit", icon: <Edit className="size-4" />, onClick: () => {} },
			{ label: "Duplicate", icon: <Copy className="size-4" />, onClick: () => {} },
			{
				label: "Delete",
				icon: <Trash2 className="size-4" />,
				onClick: () => {},
				variant: "destructive",
			},
		],
	},
};

export const WithDisabledItem: Story = {
	args: {
		items: [
			{ label: "Edit", icon: <Edit className="size-4" />, onClick: () => {} },
			{
				label: "Delete",
				icon: <Trash2 className="size-4" />,
				onClick: () => {},
				variant: "destructive",
				disabled: true,
			},
		],
	},
};

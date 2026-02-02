import { Button } from "@/components/Button";
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuTrigger,
} from "@/components/ContextMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ContextMenu> = {
	title: "Components/ContextMenu",
	component: ContextMenu,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger asChild>
				<div className="flex h-[150px] w-[300px] items-center justify-center rounded border border-dashed">
					Right click here
				</div>
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem>
					Back
					<ContextMenuShortcut>⌘[</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Forward
					<ContextMenuShortcut>⌘]</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Reload
					<ContextMenuShortcut>⌘R</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem>
					Save Page As...
					<ContextMenuShortcut>⌘S</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>Print...</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	),
};

export const WithCheckbox: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger asChild>
				<Button variant="outline">Right click for options</Button>
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuLabel>View</ContextMenuLabel>
				<ContextMenuSeparator />
				<ContextMenuCheckboxItem checked>Show bookmarks bar</ContextMenuCheckboxItem>
				<ContextMenuCheckboxItem>Show full URLs</ContextMenuCheckboxItem>
				<ContextMenuSeparator />
				<ContextMenuItem variant="destructive">Delete</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	),
};

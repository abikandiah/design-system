import { ConfirmDeleteDialog } from "@/components/ConfirmDeleteDialog";
import { Button } from "@/components/Button";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ConfirmDeleteDialog> = {
	title: "Components/ConfirmDeleteDialog",
	component: ConfirmDeleteDialog,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<>
				<Button variant="destructive" onClick={() => setOpen(true)}>
					Delete Item
				</Button>
				<ConfirmDeleteDialog
					open={open}
					onOpenChange={setOpen}
					title="Delete item?"
					description="This action cannot be undone. This will permanently delete the item."
					onConfirm={() => setOpen(false)}
				/>
			</>
		);
	},
};

export const Pending: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<>
				<Button variant="destructive" onClick={() => setOpen(true)}>
					Delete Item
				</Button>
				<ConfirmDeleteDialog
					open={open}
					onOpenChange={setOpen}
					title="Delete item?"
					description="This action cannot be undone."
					onConfirm={() => {}}
					isPending={true}
				/>
			</>
		);
	},
};

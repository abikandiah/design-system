import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/Dialog";
import { Button } from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<typeof Dialog> = {
	title: "Components/Dialog",
	component: Dialog,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Open Dialog</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Dialog Title</DialogTitle>
					<DialogDescription>
						This is a description of the dialog content.
					</DialogDescription>
				</DialogHeader>
				<p className="text-sm text-muted-foreground">Dialog body content goes here.</p>
				<DialogFooter>
					<Button variant="outline">Cancel</Button>
					<Button>Confirm</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole("button", { name: "Open Dialog" });
		await userEvent.click(trigger);
		const dialog = await within(document.body).findByRole("dialog");
		await expect(dialog).toBeVisible();
		await expect(within(dialog).getByText("Dialog Title")).toBeVisible();
	},
};

export const WithCloseAction: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Open Dialog</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Information</DialogTitle>
					<DialogDescription>
						This dialog has a close action button in the footer.
					</DialogDescription>
				</DialogHeader>
				<p className="text-sm text-muted-foreground">Some informational content here.</p>
				<DialogFooter showCloseAction>
					<Button>Save</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};

export const WithoutCloseIcon: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Open Dialog</Button>
			</DialogTrigger>
			<DialogContent showCloseIcon={false}>
				<DialogHeader>
					<DialogTitle>No Close Icon</DialogTitle>
					<DialogDescription>
						This dialog hides the X close icon in the corner.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter showCloseAction>
					<Button>Done</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};

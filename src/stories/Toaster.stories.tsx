import { Button } from "@/components/Button";
import { Toaster } from "@/components/Toaster";
import type { Meta, StoryObj } from "@storybook/react";
import { toast } from "sonner";

const meta: Meta = {
	title: "Components/Toaster",
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<>
			<Toaster />
			<div className="flex gap-2">
				<Button onClick={() => toast("Hello from Toaster!")}>Show Toast</Button>
				<Button variant="destructive" onClick={() => toast.error("Something went wrong")}>
					Error Toast
				</Button>
				<Button variant="secondary" onClick={() => toast.success("Action completed!")}>
					Success Toast
				</Button>
			</div>
		</>
	),
};

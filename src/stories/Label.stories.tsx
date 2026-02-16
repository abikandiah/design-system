import { Label } from "@/components/Label";
import { Input } from "@/components/Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
	title: "Components/Label",
	component: Label,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: "Email address" } };

export const WithInput: Story = {
	render: () => (
		<div className="grid w-full max-w-sm gap-2">
			<Label htmlFor="email">Email</Label>
			<Input id="email" type="email" placeholder="you@example.com" />
		</div>
	),
};

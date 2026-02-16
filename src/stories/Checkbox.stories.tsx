import { Checkbox } from "@/components/Checkbox";
import { Label } from "@/components/Label";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<typeof Checkbox> = {
	title: "Components/Checkbox",
	component: Checkbox,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		disabled: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole("checkbox");
		await expect(checkbox).not.toBeChecked();
		await userEvent.click(checkbox);
		await expect(checkbox).toBeChecked();
		await userEvent.click(checkbox);
		await expect(checkbox).not.toBeChecked();
	},
};

export const Checked: Story = { args: { defaultChecked: true } };

export const Disabled: Story = { args: { disabled: true } };

export const WithLabel: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<Checkbox id="terms" />
			<Label htmlFor="terms">Accept terms and conditions</Label>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByText("Accept terms and conditions");
		await userEvent.click(label);
		const checkbox = canvas.getByRole("checkbox");
		await expect(checkbox).toBeChecked();
	},
};

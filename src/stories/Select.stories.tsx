import { Select } from "@/components/Select";
import { Label } from "@/components/Label";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
	title: "Components/Select",
	component: Select,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		disabled: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<Select {...args}>
			<option value="">Choose an option...</option>
			<option value="apple">Apple</option>
			<option value="banana">Banana</option>
			<option value="cherry">Cherry</option>
		</Select>
	),
};

export const Disabled: Story = {
	render: () => (
		<Select disabled>
			<option value="">Choose an option...</option>
			<option value="apple">Apple</option>
		</Select>
	),
};

export const WithLabel: Story = {
	render: () => (
		<div className="grid w-full max-w-sm gap-2">
			<Label htmlFor="fruit">Favorite fruit</Label>
			<Select id="fruit">
				<option value="">Choose...</option>
				<option value="apple">Apple</option>
				<option value="banana">Banana</option>
				<option value="cherry">Cherry</option>
			</Select>
		</div>
	),
};

import { Input } from "@/components/Input";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<typeof Input> = {
	title: "Components/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: ["text", "email", "password", "number", "search"],
		},
		disabled: { control: "boolean" },
		placeholder: { control: "text" },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: "Enter text...",
		type: "text",
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText("Enter text...");
		await userEvent.type(input, "Hello world");
		await expect(input).toHaveValue("Hello world");
	},
};

export const WithValue: Story = {
	args: {
		defaultValue: "Hello world",
		placeholder: "Enter text...",
	},
};

export const Email: Story = {
	args: {
		type: "email",
		placeholder: "you@example.com",
	},
};

export const Password: Story = {
	args: {
		type: "password",
		placeholder: "••••••••",
	},
};

export const Disabled: Story = {
	args: {
		placeholder: "Disabled input",
		disabled: true,
	},
};

export const WithLabel: Story = {
	render: () => (
		<div className="grid w-full max-w-sm gap-2">
			<label htmlFor="email" className="text-sm font-medium">
				Email
			</label>
			<Input id="email" type="email" placeholder="you@example.com" />
		</div>
	),
};

import { Textarea } from "@/components/Textarea";
import { Label } from "@/components/Label";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Textarea> = {
	title: "Components/Textarea",
	component: Textarea,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		disabled: { control: "boolean" },
		placeholder: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { placeholder: "Type your message here..." } };

export const WithValue: Story = { args: { defaultValue: "This is some existing content." } };

export const Disabled: Story = { args: { placeholder: "Disabled textarea", disabled: true } };

export const WithLabel: Story = {
	render: () => (
		<div className="grid w-full max-w-sm gap-2">
			<Label htmlFor="message">Message</Label>
			<Textarea id="message" placeholder="Type your message here..." />
		</div>
	),
};

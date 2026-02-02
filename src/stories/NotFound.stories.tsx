import { NotFound } from "@/components/NotFound";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NotFound> = {
	title: "Components/NotFound",
	component: NotFound,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const WithCustomMessage: Story = {
	args: {
		children: (
			<p>
				Try going back to the{" "}
				<a href="/" className="underline">
					home page
				</a>{" "}
				or use the search to find what you need.
			</p>
		),
	},
};

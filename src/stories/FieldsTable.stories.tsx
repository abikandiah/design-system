import { FieldsTable } from "@/components/FieldsTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FieldsTable> = {
	title: "Components/FieldsTable",
	component: FieldsTable,
	parameters: { layout: "padded" },
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		rows: [
			{ label: "Name", value: "John Doe" },
			{ label: "Email", value: "john@example.com" },
			{ label: "Role", value: "Administrator" },
		],
	},
};

export const WithMultiline: Story = {
	args: {
		rows: [
			{ label: "Name", value: "Jane Smith" },
			{
				label: "Description",
				value: "This is a longer description\nthat spans multiple lines\nto demonstrate the multiline feature.",
				multiline: true,
			},
			{ label: "Status", value: "Active" },
		],
	},
};

export const WithFalsyRows: Story = {
	args: {
		rows: [
			{ label: "Visible", value: "This row is visible" },
			null,
			undefined,
			false,
			{ label: "Also visible", value: "Falsy rows are filtered out" },
		],
	},
};

import {
    InnerUnorderedList,
    OrderedList,
    UnorderedList,
} from "@/components/List";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UnorderedList> = {
	title: "Components/List",
	component: UnorderedList,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "clear"],
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Unordered: Story = {
	render: () => (
		<UnorderedList>
			<li>First item</li>
			<li>Second item</li>
			<li>Third item</li>
		</UnorderedList>
	),
};

export const UnorderedClear: Story = {
	render: () => (
		<UnorderedList variant="clear">
			<li>No border or background</li>
			<li>Second item</li>
			<li>Third item</li>
		</UnorderedList>
	),
};

export const Ordered: Story = {
	render: () => (
		<OrderedList>
			<li>Step one</li>
			<li>Step two</li>
			<li>Step three</li>
		</OrderedList>
	),
};

export const OrderedClear: Story = {
	render: () => (
		<OrderedList variant="clear">
			<li>Step one</li>
			<li>Step two</li>
			<li>Step three</li>
		</OrderedList>
	),
};

export const Nested: Story = {
	render: () => (
		<UnorderedList>
			<li>Parent item</li>
			<li>
				Parent with nested list
				<InnerUnorderedList>
					<li>Nested item</li>
					<li>Another nested item</li>
				</InnerUnorderedList>
			</li>
			<li>Third item</li>
		</UnorderedList>
	),
};

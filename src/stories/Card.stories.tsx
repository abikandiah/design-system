import { Button } from "@/components/Button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here.</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card content area. You can put any content here.</p>
			</CardContent>
			<CardFooter>
				<Button>Action</Button>
			</CardFooter>
		</Card>
	),
};

export const WithAction: Story = {
	render: () => (
		<Card className="w-[350px] border-b">
			<CardHeader>
				<CardAction>
					<Button variant="ghost" size="icon-sm">
						⋯
					</Button>
				</CardAction>
				<CardTitle>Card with action</CardTitle>
				<CardDescription>Header has an action button in the top right.</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Use CardAction inside CardHeader for actions like menu or close.</p>
			</CardContent>
		</Card>
	),
};

export const ContentOnly: Story = {
	render: () => (
		<Card className="w-[350px]">
			<CardContent className="pt-6">
				<p>A simple card with only content, no header or footer.</p>
			</CardContent>
		</Card>
	),
};

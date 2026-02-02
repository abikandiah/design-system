import { Button } from "@/components/Button";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/Empty";
import type { Meta, StoryObj } from "@storybook/react";
import { Inbox } from "lucide-react";

const meta: Meta<typeof Empty> = {
	title: "Components/Empty",
	component: Empty,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Empty className="min-w-[320px]">
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<Inbox className="size-6" />
				</EmptyMedia>
				<EmptyTitle>No messages</EmptyTitle>
				<EmptyDescription>
					You don&apos;t have any messages yet. Start a conversation.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<Button>Compose</Button>
			</EmptyContent>
		</Empty>
	),
};

export const WithIconVariant: Story = {
	render: () => (
		<Empty className="min-w-[320px]">
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<Inbox className="size-6" />
				</EmptyMedia>
				<EmptyTitle>Empty state</EmptyTitle>
				<EmptyDescription>
					Use EmptyMedia with variant=&quot;icon&quot; for a rounded icon background.
				</EmptyDescription>
			</EmptyHeader>
		</Empty>
	),
};

export const Minimal: Story = {
	render: () => (
		<Empty className="min-w-[280px]">
			<EmptyHeader>
				<EmptyTitle>Nothing here</EmptyTitle>
				<EmptyDescription>Minimal empty state with no icon or action.</EmptyDescription>
			</EmptyHeader>
		</Empty>
	),
};

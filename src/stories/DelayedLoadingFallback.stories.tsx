import { DelayedLoadingFallback } from "@/components/DelayedLoadingFallback";
import { Skeleton } from "@/components/Skeleton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DelayedLoadingFallback> = {
	title: "Components/DelayedLoadingFallback",
	component: DelayedLoadingFallback,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	argTypes: {
		isLoading: { control: "boolean" },
		delayMs: { control: "number" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
	args: {
		isLoading: true,
		delayMs: 0,
		fallback: <Skeleton className="h-8 w-48" />,
		children: <p>Content loaded!</p>,
	},
};

export const Loaded: Story = {
	args: {
		isLoading: false,
		fallback: <Skeleton className="h-8 w-48" />,
		children: <p>Content loaded!</p>,
	},
};

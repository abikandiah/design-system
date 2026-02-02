import { Button } from "@/components/Button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/Tooltip";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
	title: "Components/Tooltip",
	component: Tooltip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">Hover me</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>Add to library</p>
			</TooltipContent>
		</Tooltip>
	),
};

export const WithDelay: Story = {
	render: () => (
		<TooltipProvider delayDuration={300}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">Hover (300ms delay)</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Tooltip with custom delay</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
};

export const Multiple: Story = {
	render: () => (
		<div className="flex gap-4">
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">First</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>First tooltip</p>
				</TooltipContent>
			</Tooltip>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">Second</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Second tooltip</p>
				</TooltipContent>
			</Tooltip>
		</div>
	),
};

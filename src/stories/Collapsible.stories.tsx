import { Button } from "@/components/Button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/Collapsible";
import type { Meta, StoryObj } from "@storybook/react";
import { ChevronDown } from "lucide-react";

const meta: Meta<typeof Collapsible> = {
	title: "Components/Collapsible",
	component: Collapsible,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Collapsible className="w-[350px]">
			<div className="flex items-center justify-between space-x-4">
				<h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
				<CollapsibleTrigger asChild>
					<Button variant="ghost" size="icon">
						<ChevronDown className="size-4" />
						<span className="sr-only">Toggle</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			<div className="rounded border px-4 py-2 font-mono text-sm">
				@radix-ui/primitives
			</div>
			<CollapsibleContent className="space-y-2">
				<div className="rounded border px-4 py-2 font-mono text-sm">
					@radix-ui/colors
				</div>
				<div className="rounded border px-4 py-2 font-mono text-sm">
					@stitches/react
				</div>
			</CollapsibleContent>
		</Collapsible>
	),
};

export const OpenByDefault: Story = {
	render: () => (
		<Collapsible defaultOpen className="w-[350px]">
			<div className="flex items-center justify-between space-x-4">
				<h4 className="text-sm font-semibold">Open by default</h4>
				<CollapsibleTrigger asChild>
					<Button variant="ghost" size="icon">
						<ChevronDown className="size-4" />
						<span className="sr-only">Toggle</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent>
				<p className="text-sm text-muted-foreground">
					This content is visible by default. Click the trigger to collapse.
				</p>
			</CollapsibleContent>
		</Collapsible>
	),
};

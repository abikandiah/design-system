import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/Popover";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Popover> = {
	title: "Components/Popover",
	component: Popover,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">Open popover</Button>
			</PopoverTrigger>
			<PopoverContent>
				<div className="grid gap-2">
					<h4 className="font-medium leading-none">Dimensions</h4>
					<p className="text-muted-foreground text-sm">
						Set the dimensions for the layer.
					</p>
				</div>
			</PopoverContent>
		</Popover>
	),
};

export const WithForm: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">Pick a date</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="grid gap-4">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Search</h4>
						<p className="text-muted-foreground text-sm">
							Enter a search term below.
						</p>
					</div>
					<div className="grid gap-2">
						<Input id="search" placeholder="Type here..." />
						<Button size="sm">Submit</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	),
};

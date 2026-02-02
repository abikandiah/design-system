import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/Sheet";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sheet> = {
	title: "Components/Sheet",
	component: Sheet,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Right: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Open (right)</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Edit profile</SheetTitle>
					<SheetDescription>
						Make changes to your profile here. Click save when you&apos;re done.
					</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="grid gap-2">
						<label htmlFor="name" className="text-sm font-medium">
							Name
						</label>
						<Input id="name" defaultValue="Pedro Duarte" />
					</div>
					<div className="grid gap-2">
						<label htmlFor="username" className="text-sm font-medium">
							Username
						</label>
						<Input id="username" defaultValue="@peduarte" />
					</div>
				</div>
				<SheetFooter>
					<Button type="submit">Save changes</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	),
};

export const Left: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Open (left)</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Sidebar</SheetTitle>
					<SheetDescription>
						Sheet sliding in from the left.
					</SheetDescription>
				</SheetHeader>
				<div className="py-4">Content goes here.</div>
			</SheetContent>
		</Sheet>
	),
};

export const Top: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Open (top)</Button>
			</SheetTrigger>
			<SheetContent side="top">
				<SheetHeader>
					<SheetTitle>Top sheet</SheetTitle>
					<SheetDescription>
						Sheet sliding in from the top.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	),
};

export const Bottom: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Open (bottom)</Button>
			</SheetTrigger>
			<SheetContent side="bottom">
				<SheetHeader>
					<SheetTitle>Bottom sheet</SheetTitle>
					<SheetDescription>
						Sheet sliding in from the bottom.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	),
};

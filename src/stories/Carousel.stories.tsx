import { Card, CardContent } from "@/components/Card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/Carousel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Carousel> = {
	title: "Components/Carousel",
	component: Carousel,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Carousel className="w-full max-w-xs">
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index}>
						<Card>
							<CardContent className="flex aspect-square items-center justify-center p-6">
								<span className="text-4xl font-semibold">{index + 1}</span>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	),
};

export const MultipleSlides: Story = {
	render: () => (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			className="w-full max-w-sm"
		>
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className="basis-1/2">
						<Card>
							<CardContent className="flex aspect-square items-center justify-center p-6">
								<span className="text-2xl font-semibold">{index + 1}</span>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	),
};

export const Vertical: Story = {
	render: () => (
		<Carousel
			orientation="vertical"
			className="w-full max-w-xs"
			opts={{
				align: "start",
			}}
		>
			<CarouselContent className="-mt-4 h-[200px]">
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className="pt-4">
						<Card>
							<CardContent className="flex items-center justify-center p-6">
								<span className="text-2xl font-semibold">{index + 1}</span>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	),
};

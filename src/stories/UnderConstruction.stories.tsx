import {
    ConstructionLanding,
    UnderConstruction,
} from "@/components/UnderConstruction";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UnderConstruction> = {
	title: "Components/UnderConstruction",
	component: UnderConstruction,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const ConstructionLandingView: Story = {
	render: () => (
		<div className="min-h-[400px] w-full">
			<ConstructionLanding />
		</div>
	),
};

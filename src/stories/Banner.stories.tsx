import { Banner, MessageBanner, bannerType } from "@/components/Banner";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Banner> = {
	title: "Components/Banner",
	component: Banner,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: Object.values(bannerType),
		},
		loading: { control: "boolean" },
		hideIcon: { control: "boolean" },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
	args: {
		type: bannerType.Info,
		title: "Info",
		children: <p>This is an informational banner.</p>,
	},
};

export const Note: Story = {
	args: {
		type: bannerType.Note,
		title: "Note",
		children: <p>This is a note or tip.</p>,
	},
};

export const Warning: Story = {
	args: {
		type: bannerType.Warning,
		title: "Warning",
		children: <p>Please be careful. This is a warning.</p>,
	},
};

export const Alert: Story = {
	args: {
		type: bannerType.Alert,
		title: "Alert",
		children: <p>Something went wrong. This is an alert.</p>,
	},
};

export const WithoutTitle: Story = {
	args: {
		type: bannerType.Info,
		children: <p>Banner without a title.</p>,
	},
};

export const WithoutIcon: Story = {
	args: {
		type: bannerType.Note,
		title: "No icon",
		hideIcon: true,
		children: <p>This banner has the icon hidden.</p>,
	},
};

export const WithClose: Story = {
	args: {
		type: bannerType.Info,
		title: "Dismissible",
		onClose: () => alert("Close clicked"),
		children: <p>Click the X to close (alerts in story).</p>,
	},
};

export const MessageBannerShort: Story = {
	render: () => (
		<MessageBanner
			type={bannerType.Note}
			title="Quick message"
			message="Use MessageBanner for a simple string message."
		/>
	),
};

export const Loading: Story = {
	args: {
		type: bannerType.Info,
		title: "Loading",
		loading: true,
		children: null,
	},
};

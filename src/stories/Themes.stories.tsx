import { Badge } from "@/components/Badge";
import { Banner, bannerType } from "@/components/Banner";
import { Button } from "@/components/Button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/Card";
import { Input } from "@/components/Input";
import { Separator } from "@/components/Separator";
import { ThemeSelector } from "@/components/ThemeSelector";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/themes";
import type { Decorator, Meta, StoryObj } from "@storybook/react";

/**
 * A side-by-side showcase of Steel vs Linen color themes.
 * Use the toolbar controls (Theme / Color Mode) to quickly preview
 * any single theme, or use this story to compare both at once.
 */

const withThemeProvider: Decorator = (Story) => (
	<ThemeProvider>
		<Story />
	</ThemeProvider>
);

const meta: Meta = {
	title: "Design System/Themes",
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	decorators: [withThemeProvider],
};

export default meta;
type Story = StoryObj<typeof meta>;

function ComponentShowcase() {
	return (
		<div className="flex flex-col gap-6 p-6 bg-background min-h-screen">
			{/* Header bar */}
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold text-foreground">Component Preview</h2>
				<div className="flex items-center gap-2">
					<ThemeSelector />
					<ThemeToggle />
				</div>
			</div>

			<Separator />

			{/* Buttons */}
			<section className="flex flex-col gap-3">
				<h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Buttons</h3>
				<div className="flex flex-wrap gap-2">
					<Button variant="default">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="destructive">Destructive</Button>
					<Button variant="link">Link</Button>
					<Button disabled>Disabled</Button>
				</div>
			</section>

			<Separator />

			{/* Badges */}
			<section className="flex flex-col gap-3">
				<h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Badges</h3>
				<div className="flex flex-wrap gap-2">
					<Badge variant="default">Default</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="success">Success</Badge>
					<Badge variant="warning">Warning</Badge>
					<Badge variant="destructive">Destructive</Badge>
					<Badge variant="outline">Outline</Badge>
				</div>
			</section>

			<Separator />

			{/* Form fields */}
			<section className="flex flex-col gap-3">
				<h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Form</h3>
				<div className="flex flex-col gap-3 max-w-sm">
					<div className="grid gap-1.5">
						<label htmlFor="theme-name" className="text-sm font-medium text-foreground">Name</label>
						<Input id="theme-name" placeholder="Enter your name" />
					</div>
					<div className="grid gap-1.5">
						<label htmlFor="theme-email" className="text-sm font-medium text-foreground">Email</label>
						<Input id="theme-email" type="email" placeholder="you@example.com" />
					</div>
					<div className="grid gap-1.5">
						<label htmlFor="theme-disabled" className="text-sm font-medium text-foreground">Disabled</label>
						<Input id="theme-disabled" placeholder="Can't touch this" disabled />
					</div>
					<Button className="self-start">Submit</Button>
				</div>
			</section>

			<Separator />

			{/* Cards */}
			<section className="flex flex-col gap-3">
				<h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Cards</h3>
				<div className="flex flex-wrap gap-4">
					<Card className="w-[280px]">
						<CardHeader>
							<CardTitle>Project Alpha</CardTitle>
							<CardDescription>Started January 2025</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-foreground">An active project with three collaborators and two pending reviews.</p>
						</CardContent>
						<CardFooter className="gap-2">
							<Button size="sm">Open</Button>
							<Button size="sm" variant="outline">Archive</Button>
						</CardFooter>
					</Card>

					<Card className="w-[280px]">
						<CardHeader>
							<CardTitle>Billing</CardTitle>
							<CardDescription>Current plan: Pro</CardDescription>
						</CardHeader>
						<CardContent className="flex items-center gap-2">
							<Badge variant="success">Active</Badge>
							<span className="text-sm text-muted-foreground">Renews March 2026</span>
						</CardContent>
						<CardFooter>
							<Button size="sm" variant="outline">Manage plan</Button>
						</CardFooter>
					</Card>
				</div>
			</section>

			<Separator />

			{/* Banners */}
			<section className="flex flex-col gap-3">
				<h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Banners</h3>
				<div className="flex flex-col gap-3 max-w-xl">
					<Banner type={bannerType.Info} title="Heads up">
						<p>This is an informational message using the current theme.</p>
					</Banner>
					<Banner type={bannerType.Warning} title="Warning">
						<p>Something might need your attention here.</p>
					</Banner>
					<Banner type={bannerType.Alert} title="Error">
						<p>Something went wrong. Please try again.</p>
					</Banner>
					<Banner type={bannerType.Note} title="Note">
						<p>Just a helpful tip for this section.</p>
					</Banner>
				</div>
			</section>
		</div>
	);
}

/**
 * A single canvas showing all components with live theme controls.
 * Use the ThemeSelector and ThemeToggle in the top-right to switch themes,
 * or use the Storybook toolbar for quick switching.
 */
export const Showcase: Story = {
	render: () => <ComponentShowcase />,
};

/**
 * Steel and Linen themes side-by-side for direct comparison.
 * The dark/light class from the toolbar still applies to both panels.
 */
export const SideBySide: Story = {
	parameters: {
		layout: "fullscreen",
	},
	render: () => (
		<div className="flex min-h-screen">
			{/* Steel */}
			<div className="flex-1 min-w-0" data-theme="steel">
				<div className="bg-background min-h-screen p-6 flex flex-col gap-6">
					<h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Steel</h2>

					<div className="flex flex-wrap gap-2">
						<Button variant="default">Primary</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="destructive">Destructive</Button>
					</div>

					<div className="flex flex-wrap gap-2">
						<Badge variant="default">Default</Badge>
						<Badge variant="secondary">Secondary</Badge>
						<Badge variant="success">Success</Badge>
						<Badge variant="warning">Warning</Badge>
						<Badge variant="destructive">Destructive</Badge>
					</div>

					<div className="flex flex-col gap-2 max-w-sm">
						<Input placeholder="Steel input field" />
						<Button>Submit</Button>
					</div>

					<Card className="max-w-sm">
						<CardHeader>
							<CardTitle>Steel Card</CardTitle>
							<CardDescription>Industrial, sharp, structured.</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm">The Steel theme uses cool metallic tones and sharp corners.</p>
						</CardContent>
						<CardFooter>
							<Button size="sm">Action</Button>
						</CardFooter>
					</Card>

					<Banner type={bannerType.Info} title="Steel banner">
						<p>Informational banner in Steel theme.</p>
					</Banner>
				</div>
			</div>

			{/* Divider */}
			<div className="w-px bg-border" />

			{/* Linen */}
			<div className="flex-1 min-w-0" data-theme="linen">
				<div className="bg-background min-h-screen p-6 flex flex-col gap-6">
					<h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Linen</h2>

					<div className="flex flex-wrap gap-2">
						<Button variant="default">Primary</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="destructive">Destructive</Button>
					</div>

					<div className="flex flex-wrap gap-2">
						<Badge variant="default">Default</Badge>
						<Badge variant="secondary">Secondary</Badge>
						<Badge variant="success">Success</Badge>
						<Badge variant="warning">Warning</Badge>
						<Badge variant="destructive">Destructive</Badge>
					</div>

					<div className="flex flex-col gap-2 max-w-sm">
						<Input placeholder="Linen input field" />
						<Button>Submit</Button>
					</div>

					<Card className="max-w-sm">
						<CardHeader>
							<CardTitle>Linen Card</CardTitle>
							<CardDescription>Warm, minimal, approachable.</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm">The Linen theme uses warm tones and rounded corners.</p>
						</CardContent>
						<CardFooter>
							<Button size="sm">Action</Button>
						</CardFooter>
					</Card>

					<Banner type={bannerType.Info} title="Linen banner">
						<p>Informational banner in Linen theme.</p>
					</Banner>
				</div>
			</div>
		</div>
	),
};

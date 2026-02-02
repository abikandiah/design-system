import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarSeparator,
    SidebarTrigger,
} from "@/components/Sidebar";
import type { Meta, StoryObj } from "@storybook/react";
import {
    FileText,
    Home,
    LayoutDashboard,
    Settings,
    Users,
} from "lucide-react";

const meta: Meta<typeof SidebarProvider> = {
	title: "Components/Sidebar",
	component: SidebarProvider,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg" isActive>
								<LayoutDashboard className="size-5" />
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-medium">Acme Inc</span>
									<span className="text-muted-foreground text-xs font-normal">
										Dashboard
									</span>
								</div>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Application</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton isActive>
										<Home className="size-4" />
										<span>Home</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>
										<FileText className="size-4" />
										<span>Documents</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton>
										<Users className="size-4" />
										<span>Team</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
					<SidebarSeparator />
					<SidebarGroup>
						<SidebarGroupLabel>Settings</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton>
										<Settings className="size-4" />
										<span>Settings</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<Settings className="size-4" />
								<span>Help & Support</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
			<SidebarInset>
				<header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger />
					<div className="flex flex-1 items-center gap-2">
						<h1 className="text-lg font-semibold">Sidebar demo</h1>
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4">
					<p className="text-muted-foreground text-sm">
						Use the trigger (or Ctrl+B / Cmd+B) to collapse/expand the sidebar.
						Resize the viewport to see mobile sheet behavior.
					</p>
				</div>
			</SidebarInset>
		</SidebarProvider>
	),
};

export const Collapsed: Story = {
	render: () => (
		<SidebarProvider defaultOpen={false}>
			<Sidebar collapsible="icon">
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg" isActive tooltip="Dashboard">
								<LayoutDashboard className="size-5" />
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-medium">Acme</span>
								</div>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton tooltip="Home">
										<Home className="size-4" />
										<span>Home</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton tooltip="Documents">
										<FileText className="size-4" />
										<span>Documents</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarInset>
				<header className="flex h-14 items-center gap-2 border-b px-4">
					<SidebarTrigger />
					<span className="text-sm">Collapsed sidebar (icon mode)</span>
				</header>
			</SidebarInset>
		</SidebarProvider>
	),
};

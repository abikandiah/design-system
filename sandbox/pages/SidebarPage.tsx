import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/Card'
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
} from '@/components/Sidebar'
import {
	CircleUserRound,
	FileText,
	Home,
	LayoutDashboard,
	Settings,
	Users,
} from 'lucide-react'

export function SidebarPage() {
	return (
		<SidebarProvider style={{ minHeight: 'calc(100vh - 3.5rem)' }}>
			{/* top-14 clears the fixed sandbox header, bottom-0 fills to viewport bottom */}
			<Sidebar className="top-14 bottom-0">
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg" isActive>
								<LayoutDashboard className="size-5" />
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-medium">Acme Inc</span>
									<span className="text-muted-foreground text-xs font-normal">Dashboard</span>
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
									<SidebarMenuButton isActive tooltip="Home">
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
								<SidebarMenuItem>
									<SidebarMenuButton tooltip="Team">
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
									<SidebarMenuButton tooltip="Settings">
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
							<SidebarMenuButton tooltip="Account">
								<CircleUserRound className="size-4" />
								<span>Jane Smith</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>

			<SidebarInset>
				<header className="flex h-14 items-center gap-2 border-b border-border px-4">
					<SidebarTrigger />
					<span className="font-medium text-foreground">Home</span>
				</header>
				<div className="p-6 flex flex-col gap-6">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
							<p className="text-muted-foreground text-sm mt-1">
								Use Ctrl+B / Cmd+B or the trigger to collapse the sidebar.
							</p>
						</div>
						<Button>New project</Button>
					</div>
					<div className="grid gap-4 sm:grid-cols-3">
						<Card>
							<CardHeader>
								<CardTitle>Projects</CardTitle>
								<CardDescription>Active this month</CardDescription>
							</CardHeader>
							<CardContent className="flex items-center gap-2">
								<span className="text-3xl font-bold text-foreground">12</span>
								<Badge variant="success">+3</Badge>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Team</CardTitle>
								<CardDescription>Active members</CardDescription>
							</CardHeader>
							<CardContent>
								<span className="text-3xl font-bold text-foreground">8</span>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Reviews</CardTitle>
								<CardDescription>Pending approval</CardDescription>
							</CardHeader>
							<CardContent className="flex items-center gap-2">
								<span className="text-3xl font-bold text-foreground">4</span>
								<Badge variant="warning">needs attention</Badge>
							</CardContent>
						</Card>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}

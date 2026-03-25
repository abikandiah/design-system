import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/Card'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/Collapsible'
import { Separator } from '@/components/Separator'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/Table'
import { ChevronDown } from 'lucide-react'

function Section({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) {
	return (
		<section className="flex flex-col gap-4">
			<h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
				{title}
			</h2>
			{children}
			<Separator />
		</section>
	)
}

const tableData = [
	{
		name: 'Project Alpha',
		status: 'Active',
		owner: 'Jane Smith',
		updated: 'Mar 18',
	},
	{
		name: 'Project Beta',
		status: 'In review',
		owner: 'Tom Lee',
		updated: 'Mar 15',
	},
	{
		name: 'Project Gamma',
		status: 'Archived',
		owner: 'Sara Patel',
		updated: 'Feb 28',
	},
	{
		name: 'Project Delta',
		status: 'Active',
		owner: 'Chris Wu',
		updated: 'Mar 20',
	},
]

const statusVariant = {
	Active: 'success',
	'In review': 'warning',
	Archived: 'secondary',
} as const

export function LayoutPage() {
	return (
		<div className="flex flex-col gap-8">
			<div>
				<h1 className="text-2xl font-bold text-foreground">Layout</h1>
				<p className="text-muted-foreground mt-1">
					Cards, tables, sidebar, and collapsibles.
				</p>
			</div>

			<Section title="Cards">
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<Card>
						<CardHeader>
							<CardTitle>Project Alpha</CardTitle>
							<CardDescription>
								3 collaborators · 2 open reviews
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-foreground">
								An active project underway since January 2025.
							</p>
						</CardContent>
						<CardFooter className="gap-2">
							<Button size="sm">Open</Button>
							<Button size="sm" variant="outline">
								Archive
							</Button>
						</CardFooter>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Billing</CardTitle>
							<CardDescription>
								Pro plan · renews March 2026
							</CardDescription>
						</CardHeader>
						<CardContent className="flex items-center gap-2">
							<Badge variant="success">Active</Badge>
						</CardContent>
						<CardFooter>
							<Button size="sm" variant="outline">
								Manage
							</Button>
						</CardFooter>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>API Usage</CardTitle>
							<CardDescription>
								Current billing period
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex flex-col gap-1">
								<div className="flex justify-between text-sm">
									<span className="text-muted-foreground">
										Requests
									</span>
									<span className="font-medium text-foreground">
										12,400 / 50,000
									</span>
								</div>
								<div className="h-2 rounded-full bg-muted overflow-hidden">
									<div
										className="h-full rounded-full bg-primary"
										style={{ width: '25%' }}
									/>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<Button size="sm" variant="ghost">
								View details
							</Button>
						</CardFooter>
					</Card>
				</div>
			</Section>

			<Section title="Table">
				<div className="overflow-hidden">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Project</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Owner</TableHead>
								<TableHead>Updated</TableHead>
								<TableHead />
							</TableRow>
						</TableHeader>
						<TableBody>
							{tableData.map((row) => (
								<TableRow key={row.name}>
									<TableCell className="font-medium">
										{row.name}
									</TableCell>
									<TableCell>
										<Badge
											variant={
												statusVariant[
													row.status as keyof typeof statusVariant
												] ?? 'default'
											}
										>
											{row.status}
										</Badge>
									</TableCell>
									<TableCell className="text-muted-foreground">
										{row.owner}
									</TableCell>
									<TableCell className="text-muted-foreground">
										{row.updated}
									</TableCell>
									<TableCell>
										<Button size="sm" variant="ghost">
											View
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</Section>

			<Section title="Collapsible">
				<div className="flex flex-col gap-2 max-w-sm">
					<Collapsible>
						<div className="flex items-center justify-between rounded-md border border-border px-4 py-2">
							<span className="text-sm font-medium text-foreground">
								Advanced settings
							</span>
							<CollapsibleTrigger asChild>
								<Button variant="ghost" size="icon-sm">
									<ChevronDown className="size-4" />
								</Button>
							</CollapsibleTrigger>
						</div>
						<CollapsibleContent className="px-4 py-3 text-sm text-muted-foreground border border-t-0 border-border rounded-b-md">
							<p>
								These settings are for advanced users only.
								Proceed with care.
							</p>
						</CollapsibleContent>
					</Collapsible>

					<Collapsible defaultOpen>
						<div className="flex items-center justify-between rounded-md border border-border px-4 py-2">
							<span className="text-sm font-medium text-foreground">
								Notifications
							</span>
							<CollapsibleTrigger asChild>
								<Button variant="ghost" size="icon-sm">
									<ChevronDown className="size-4" />
								</Button>
							</CollapsibleTrigger>
						</div>
						<CollapsibleContent className="px-4 py-3 text-sm text-muted-foreground border border-t-0 border-border rounded-b-md">
							<p>
								Configure how and when you receive notifications
								from the system.
							</p>
						</CollapsibleContent>
					</Collapsible>
				</div>
			</Section>
		</div>
	)
}

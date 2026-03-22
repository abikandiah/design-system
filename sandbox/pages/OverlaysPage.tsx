import { Button } from '@/components/Button'
import { ConfirmDeleteDialog } from '@/components/ConfirmDeleteDialog'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/Dialog'
import { Input } from '@/components/Input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'
import { Separator } from '@/components/Separator'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/Sheet'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/Tooltip'
import { Info } from 'lucide-react'
import { useState } from 'react'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<section className="flex flex-col gap-4">
			<h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
			{children}
			<Separator />
		</section>
	)
}

export function OverlaysPage() {
	const [deleteOpen, setDeleteOpen] = useState(false)

	return (
		<TooltipProvider>
			<div className="flex flex-col gap-8">
				<div>
					<h1 className="text-2xl font-bold text-foreground">Overlays</h1>
					<p className="text-muted-foreground mt-1">Dialogs, sheets, popovers, and tooltips.</p>
				</div>

				<Section title="Dialog">
					<div className="flex flex-wrap gap-2">
						<Dialog>
							<DialogTrigger asChild>
								<Button variant="outline">Basic dialog</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Edit project</DialogTitle>
									<DialogDescription>Update the project name and settings.</DialogDescription>
								</DialogHeader>
								<div className="grid gap-2 py-2">
									<Input placeholder="Project name" defaultValue="Alpha" />
								</div>
								<DialogFooter>
									<Button variant="outline">Cancel</Button>
									<Button>Save</Button>
								</DialogFooter>
							</DialogContent>
						</Dialog>

						<Dialog>
							<DialogTrigger asChild>
								<Button variant="outline">With close action</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Information</DialogTitle>
									<DialogDescription>This footer has a built-in close action.</DialogDescription>
								</DialogHeader>
								<p className="text-sm text-muted-foreground">Content goes here.</p>
								<DialogFooter showCloseAction>
									<Button>Confirm</Button>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</div>
				</Section>

				<Section title="Confirm delete dialog">
					<div className="flex gap-2">
						<Button variant="destructive" onClick={() => setDeleteOpen(true)}>
							Delete item
						</Button>
						<ConfirmDeleteDialog
							open={deleteOpen}
							onOpenChange={setDeleteOpen}
							onConfirm={() => setDeleteOpen(false)}
							itemName="Project Alpha"
						/>
					</div>
				</Section>

				<Section title="Sheet">
					<div className="flex flex-wrap gap-2">
						{(['right', 'left', 'top', 'bottom'] as const).map(side => (
							<Sheet key={side}>
								<SheetTrigger asChild>
									<Button variant="outline" className="capitalize">{side}</Button>
								</SheetTrigger>
								<SheetContent side={side}>
									<SheetHeader>
										<SheetTitle>Sheet — {side}</SheetTitle>
										<SheetDescription>Slides in from the {side}.</SheetDescription>
									</SheetHeader>
									<div className="py-4 flex flex-col gap-2">
										<Input placeholder="Name" />
										<Input placeholder="Email" />
									</div>
									<SheetFooter>
										<Button>Save</Button>
									</SheetFooter>
								</SheetContent>
							</Sheet>
						))}
					</div>
				</Section>

				<Section title="Popover">
					<div className="flex gap-2">
						<Popover>
							<PopoverTrigger asChild>
								<Button variant="outline">Open popover</Button>
							</PopoverTrigger>
							<PopoverContent className="w-72">
								<div className="flex flex-col gap-2">
									<p className="text-sm font-medium text-foreground">Quick settings</p>
									<Input placeholder="Display name" />
									<Button size="sm">Apply</Button>
								</div>
							</PopoverContent>
						</Popover>

						<Popover>
							<PopoverTrigger asChild>
								<Button variant="ghost" size="icon">
									<Info className="size-4" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-64">
								<p className="text-sm text-muted-foreground">
									This is additional context shown in a popover.
								</p>
							</PopoverContent>
						</Popover>
					</div>
				</Section>

				<Section title="Tooltip">
					<div className="flex flex-wrap gap-4">
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="outline">Hover me</Button>
							</TooltipTrigger>
							<TooltipContent>Default tooltip</TooltipContent>
						</Tooltip>

						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="ghost" size="icon">
									<Info className="size-4" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="right">Info about this action</TooltipContent>
						</Tooltip>

						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="destructive" size="sm">Delete</Button>
							</TooltipTrigger>
							<TooltipContent>This action cannot be undone</TooltipContent>
						</Tooltip>
					</div>
				</Section>
			</div>
		</TooltipProvider>
	)
}

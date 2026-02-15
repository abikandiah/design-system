'use client'

import { useState } from 'react'
import { MoreVertical } from 'lucide-react'
import { Button } from '@/components/Button/Button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/Popover/Popover'

export interface ActionItem {
	label: string
	icon?: React.ReactNode
	onClick: () => void
	variant?: 'default' | 'destructive'
	disabled?: boolean
}

export interface ActionsPopoverProps {
	label?: string
	items: ActionItem[]
	/** Pass true to add stopPropagation on the trigger (e.g. inside table rows). */
	stopTriggerPropagation?: boolean
}

export function ActionsPopover({
	label = 'Actions',
	items,
	stopTriggerPropagation = false,
}: ActionsPopoverProps) {
	const [open, setOpen] = useState(false)

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					type="button"
					variant="ghost"
					size="icon"
					className="size-8 shrink-0"
					aria-label={label}
					onClick={
						stopTriggerPropagation ? (e) => e.stopPropagation() : undefined
					}
				>
					<MoreVertical className="size-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent align="end" className="w-40 p-0 mt-1">
				<ul className="flex flex-col gap-0.5 p-1.5">
					{items.map((item, index) => (
						<li key={index}>
							<Button
								variant="ghost"
								size="sm"
								className={
									item.variant === 'destructive'
										? 'w-full justify-start gap-2 text-destructive hover:text-destructive'
										: 'w-full justify-start gap-2'
								}
								onClick={() => {
									setOpen(false)
									item.onClick()
								}}
								disabled={item.disabled}
							>
								{item.icon}
								{item.label}
							</Button>
						</li>
					))}
				</ul>
			</PopoverContent>
		</Popover>
	)
}

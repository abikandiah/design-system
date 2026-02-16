'use client'

import { Button } from '@/components/Button/Button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/Dialog/Dialog'
import type * as React from 'react'

export interface ConfirmDeleteDialogProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	title: string
	description: React.ReactNode
	onConfirm: () => void
	isPending?: boolean
}

export function ConfirmDeleteDialog({
	open,
	onOpenChange,
	title,
	description,
	onConfirm,
	isPending = false,
}: ConfirmDeleteDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent showCloseIcon={true}>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				<DialogFooter showCloseAction={false}>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Cancel
					</Button>
					<Button
						variant="destructive"
						onClick={onConfirm}
						disabled={isPending}
					>
						{isPending ? 'Deleting\u2026' : 'Delete'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

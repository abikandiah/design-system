'use client'

import { Toaster as Sonner } from 'sonner'

export type ToasterProps = React.ComponentProps<typeof Sonner> & {
	/** Theme override. Pass 'light', 'dark', or 'system'. If not provided, Sonner uses its default behavior. */
	theme?: 'light' | 'dark' | 'system'
}

export function Toaster({ theme, ...props }: ToasterProps) {
	return (
		<Sonner
			theme={theme}
			className="toaster group"
			richColors
			position="top-center"
			toastOptions={{
				classNames: {
					toast:
						'group toast group-[.toaster]:bg-card group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:text-muted-foreground',
					actionButton:
						'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
					cancelButton:
						'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
				},
			}}
			{...props}
		/>
	)
}

import { cn } from '@/utils'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
	'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors',
	{
		variants: {
			variant: {
				default: 'border-transparent bg-primary text-primary-foreground',
				secondary: 'border-transparent bg-secondary text-secondary-foreground',
				success:
					'border-transparent bg-[var(--badge-success)] text-[var(--badge-success-foreground)]',
				warning:
					'border-transparent bg-[var(--badge-warning)] text-[var(--badge-warning-foreground)]',
				destructive:
					'border-transparent bg-destructive text-destructive-foreground',
				outline: 'text-foreground border-border',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export function Badge({
	className,
	variant,
	...props
}: React.ComponentProps<'div'> & VariantProps<typeof badgeVariants>) {
	return (
		<div
			data-slot="badge"
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	)
}

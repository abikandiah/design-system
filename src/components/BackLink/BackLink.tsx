import { cn } from '@/utils'
import { Slot } from '@radix-ui/react-slot'
import { ChevronLeft } from 'lucide-react'

export interface BackLinkProps extends React.ComponentProps<'a'> {
	/** Link text, e.g. "Back to properties". */
	label: string
	/** If true, renders the provided child element as the link. Use with router Link components. */
	asChild?: boolean
}

/**
 * Back link with chevron icon. Router-agnostic via asChild pattern.
 *
 * @example
 * // With TanStack Router:
 * <BackLink asChild label="Back to properties">
 *   <Link to=".." replace />
 * </BackLink>
 *
 * @example
 * // Plain link:
 * <BackLink href="/properties" label="Back to properties" />
 */
export function BackLink({
	label,
	asChild = false,
	className,
	...props
}: BackLinkProps) {
	const Comp = asChild ? Slot : 'a'

	return (
		<Comp
			data-slot="back-link"
			className={cn(
				'inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground',
				className,
			)}
			{...props}
		>
			<ChevronLeft className="size-4 shrink-0" aria-hidden />
			<span>{label}</span>
		</Comp>
	)
}

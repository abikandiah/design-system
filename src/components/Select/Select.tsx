import * as React from 'react'

import { cn } from '@/utils'

/** Native select styled to match design-system Input (form control). */
export function Select({
	className,
	ref,
	...props
}: React.ComponentProps<'select'> & { ref?: React.Ref<HTMLSelectElement> }) {
	return (
		<select
			ref={ref}
			data-slot="select"
			className={cn(
				'flex h-9 w-full rounded border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors outline-none',
				'focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring',
				'disabled:pointer-events-none disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	)
}

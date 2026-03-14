import bee from '@/assets/bee.svg'
import { cn } from '@/utils'
import * as React from 'react'

export interface BeeLogoProps extends React.ComponentProps<'a'> {
	/** If true, renders the provided child element as the anchor. Use with router Link components. */
	asChild?: boolean
}

/**
 * Bee logo link. Router-agnostic via asChild pattern.
 *
 * @example
 * // With TanStack Router:
 * <BeeLogo asChild>
 *   <Link to="/" />
 * </BeeLogo>
 *
 * @example
 * // Plain link:
 * <BeeLogo href="/" />
 */
export function BeeLogo({
	asChild = false,
	className,
	children,
	...props
}: BeeLogoProps) {
	const linkClassName = cn('flex items-center outline-none group', className)

	const logoContent = (
		<img
			src={bee}
			alt=""
			aria-hidden="true"
			className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
		/>
	)

	if (asChild) {
		let child: React.ReactElement
		try {
			child = React.Children.only(children) as React.ReactElement
		} catch {
			throw new Error(
				'BeeLogo with asChild requires exactly one child element.',
			)
		}
		const mergedProps: object = {
			'aria-label': 'Home',
			className: cn(
				linkClassName,
				(child.props as React.HTMLAttributes<HTMLElement>).className,
			),
			children: logoContent,
		}
		return React.cloneElement(child, mergedProps)
	}

	return (
		<a aria-label="Home" className={linkClassName} {...props}>
			{logoContent}
		</a>
	)
}

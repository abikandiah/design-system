import { useEffect, useState } from 'react'

/**
 * Returns true only after `loading` has been true for at least `delayMs`.
 * When `loading` goes false, the returned value goes false immediately (no delay on hide).
 * Avoids flashing skeletons/spinners on fast navigations or cached data.
 */
export function useDelayedLoading(
	loading: boolean,
	delayMs: number = 250,
): boolean {
	const [showLoading, setShowLoading] = useState(false)

	useEffect(() => {
		if (!loading) {
			setShowLoading(false)
			return
		}
		const id = window.setTimeout(() => setShowLoading(true), delayMs)
		return () => window.clearTimeout(id)
	}, [loading, delayMs])

	return showLoading
}

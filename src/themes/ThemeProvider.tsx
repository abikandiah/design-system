import type { ReactNode } from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import './linen.css'
import './steel.css'

export type Theme = 'light' | 'dark' | 'system'
export type ColorTheme = 'linen' | 'steel'

const STORAGE_KEY = 'theme'
const COLOR_THEME_STORAGE_KEY = 'color-theme'

function getStoredTheme(): Theme {
	if (typeof window === 'undefined') return 'system'
	const stored = localStorage.getItem(STORAGE_KEY)
	if (stored === 'light' || stored === 'dark' || stored === 'system')
		return stored
	return 'dark'
}

function getStoredColorTheme(defaultColorTheme: ColorTheme): ColorTheme {
	if (typeof window === 'undefined') return defaultColorTheme
	const stored = localStorage.getItem(COLOR_THEME_STORAGE_KEY)
	if (stored === 'linen' || stored === 'steel') return stored
	return defaultColorTheme
}

function applyTheme(effective: 'light' | 'dark') {
	const root = document.documentElement
	if (effective === 'dark') {
		root.classList.add('dark')
	} else {
		root.classList.remove('dark')
	}
}

function applyColorTheme(colorTheme: ColorTheme) {
	document.documentElement.setAttribute('data-theme', colorTheme)
}

export function ThemeProvider({
	children,
	defaultColorTheme = 'steel',
}: {
	children: ReactNode
	defaultColorTheme?: ColorTheme
}) {
	const [theme, setThemeState] = useState<Theme>(getStoredTheme)
	const [colorTheme, setColorThemeState] = useState<ColorTheme>(() =>
		getStoredColorTheme(defaultColorTheme),
	)
	const [systemDark, setSystemDark] = useState(
		() => window.matchMedia('(prefers-color-scheme: dark)').matches,
	)

	const effectiveTheme: 'light' | 'dark' =
		theme === 'system' ? (systemDark ? 'dark' : 'light') : theme

	useEffect(() => {
		applyTheme(effectiveTheme)
	}, [effectiveTheme])

	useEffect(() => {
		applyColorTheme(colorTheme)
	}, [colorTheme])

	useEffect(() => {
		if (theme !== 'system') return
		const media = window.matchMedia('(prefers-color-scheme: dark)')
		const handler = () => setSystemDark(media.matches)
		media.addEventListener('change', handler)
		return () => media.removeEventListener('change', handler)
	}, [theme])

	const setTheme = useCallback((next: Theme) => {
		setThemeState(next)
		localStorage.setItem(STORAGE_KEY, next)
	}, [])

	const setColorTheme = useCallback((next: ColorTheme) => {
		setColorThemeState(next)
		localStorage.setItem(COLOR_THEME_STORAGE_KEY, next)
	}, [])

	const value = useMemo(
		() => ({ theme, setTheme, effectiveTheme, colorTheme, setColorTheme }),
		[theme, setTheme, effectiveTheme, colorTheme, setColorTheme],
	)

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	)
}

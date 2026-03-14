import { createContext } from 'react'
import type { ColorTheme, Theme } from './ThemeProvider'

export interface ThemeContextValue {
	theme: Theme
	setTheme: (theme: Theme) => void
	effectiveTheme: 'light' | 'dark'
	colorTheme: ColorTheme
	setColorTheme: (colorTheme: ColorTheme) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

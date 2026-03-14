import { useTheme } from '@/themes'
import type { ColorTheme } from '@/themes'
import { Select } from '../Select'

const COLOR_THEMES: { value: ColorTheme; label: string }[] = [
	{ value: 'linen', label: 'Linen' },
	{ value: 'steel', label: 'Steel' },
]

export function ThemeSelector() {
	const { colorTheme, setColorTheme } = useTheme()
	return (
		<Select
			value={colorTheme}
			aria-label="Select color theme"
			onChange={(e) => setColorTheme(e.target.value as ColorTheme)}
		>
			{COLOR_THEMES.map(({ value, label }) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</Select>
	)
}

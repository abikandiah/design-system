import { useTheme } from '@/themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../Button'

export function ThemeToggle() {
	const { setTheme, effectiveTheme } = useTheme()
	const isDark = effectiveTheme === 'dark'
	const toggle = () => setTheme(isDark ? 'light' : 'dark')
	return (
		<Button
			type="button"
			variant="ghost"
			size="icon"
			className="rounded-full"
			aria-label={isDark ? 'Dark mode on' : 'Dark mode off'}
			onClick={toggle}
		>
			{isDark ? <Moon className="size-5" /> : <Sun className="size-5" />}
		</Button>
	)
}

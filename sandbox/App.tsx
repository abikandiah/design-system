import { BeeLogo } from '@/components/BeeLogo'
import { ThemeSelector } from '@/components/ThemeSelector'
import { ThemeToggle } from '@/components/ThemeToggle'
import { ThemeProvider } from '@/themes'
import { useState } from 'react'
import { BrandingPage } from './pages/BrandingPage'
import { FeedbackPage } from './pages/FeedbackPage'
import { FormsPage } from './pages/FormsPage'
import { FoundationPage } from './pages/FoundationPage'
import { LayoutPage } from './pages/LayoutPage'
import { OverlaysPage } from './pages/OverlaysPage'
import { SidebarPage } from './pages/SidebarPage'

type Page =
	| 'foundation'
	| 'forms'
	| 'feedback'
	| 'overlays'
	| 'layout'
	| 'sidebar'
	| 'branding'

const pages: { id: Page; label: string }[] = [
	{ id: 'foundation', label: 'Foundation' },
	{ id: 'forms', label: 'Forms' },
	{ id: 'feedback', label: 'Feedback' },
	{ id: 'overlays', label: 'Overlays' },
	{ id: 'layout', label: 'Layout' },
	{ id: 'sidebar', label: 'Sidebar' },
	{ id: 'branding', label: 'Branding' },
]

function Sandbox() {
	const [page, setPage] = useState<Page>('foundation')

	const isSidebar = page === 'sidebar'

	return (
		<div className="min-h-screen bg-background text-foreground">
			<header className="header">
				<BeeLogo href="#" />
				<span className="app-title hidden text-foreground sm:inline">
					Sandbox
				</span>

				<nav className="flex items-center gap-1 ml-4">
					{pages.map((p) => (
						<button
							key={p.id}
							onClick={() => setPage(p.id)}
							className={[
								'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
								page === p.id
									? 'bg-primary text-primary-foreground'
									: 'text-muted-foreground hover:text-foreground hover:bg-accent',
							].join(' ')}
						>
							{p.label}
						</button>
					))}
				</nav>

				<div className="ml-auto flex items-center gap-2">
					<ThemeToggle />
					<ThemeSelector />
				</div>
			</header>

			{isSidebar ? (
				<div className="mt-14">
					<SidebarPage />
				</div>
			) : (
				<main className="mt-14 p-8 max-w-5xl mx-auto">
					{page === 'foundation' && <FoundationPage />}
					{page === 'forms' && <FormsPage />}
					{page === 'feedback' && <FeedbackPage />}
					{page === 'overlays' && <OverlaysPage />}
					{page === 'layout' && <LayoutPage />}
				{page === 'branding' && <BrandingPage />}
				</main>
			)}
		</div>
	)
}

export function App() {
	return (
		<ThemeProvider>
			<Sandbox />
		</ThemeProvider>
	)
}

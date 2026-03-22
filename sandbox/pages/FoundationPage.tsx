import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Separator } from '@/components/Separator'
import { Loader2, Mail, Trash2 } from 'lucide-react'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<section className="flex flex-col gap-4">
			<h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
			{children}
			<Separator />
		</section>
	)
}

export function FoundationPage() {
	return (
		<div className="flex flex-col gap-8">
			<div>
				<h1 className="text-2xl font-bold text-foreground">Foundation</h1>
				<p className="text-muted-foreground mt-1">Core tokens — buttons, badges, typography, color.</p>
			</div>

			<Section title="Buttons — variants">
				<div className="flex flex-wrap gap-2">
					<Button variant="default">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="destructive">Destructive</Button>
					<Button variant="link">Link</Button>
				</div>
			</Section>

			<Section title="Buttons — sizes">
				<div className="flex flex-wrap items-center gap-2">
					<Button size="sm">Small</Button>
					<Button size="default">Default</Button>
					<Button size="lg">Large</Button>
					<Button size="icon"><Mail className="size-4" /></Button>
					<Button size="icon-sm"><Mail className="size-3" /></Button>
					<Button size="icon-lg"><Mail className="size-5" /></Button>
				</div>
			</Section>

			<Section title="Buttons — states">
				<div className="flex flex-wrap items-center gap-2">
					<Button disabled>Disabled</Button>
					<Button>
						<Loader2 className="size-4 animate-spin" />
						Loading
					</Button>
					<Button variant="outline">
						<Mail className="size-4" />
						With icon
					</Button>
					<Button variant="destructive">
						<Trash2 className="size-4" />
						Delete
					</Button>
				</div>
			</Section>

			<Section title="Badges">
				<div className="flex flex-wrap gap-2">
					<Badge variant="default">Default</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="success">Success</Badge>
					<Badge variant="warning">Warning</Badge>
					<Badge variant="destructive">Destructive</Badge>
					<Badge variant="outline">Outline</Badge>
				</div>
			</Section>

			<Section title="Typography">
				<div className="flex flex-col gap-3">
					<p className="text-4xl font-bold text-foreground">Heading 4xl</p>
					<p className="text-3xl font-bold text-foreground">Heading 3xl</p>
					<p className="text-2xl font-semibold text-foreground">Heading 2xl</p>
					<p className="text-xl font-semibold text-foreground">Heading xl</p>
					<p className="text-lg font-medium text-foreground">Heading lg</p>
					<p className="text-base text-foreground">Body — base. The quick brown fox jumps over the lazy dog.</p>
					<p className="text-sm text-foreground">Body — sm. The quick brown fox jumps over the lazy dog.</p>
					<p className="text-xs text-muted-foreground">Body — xs / muted. The quick brown fox jumps over the lazy dog.</p>
					<p className="font-mono text-sm text-foreground">Mono — code snippet</p>
				</div>
			</Section>

			<Section title="Color tokens">
				<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
					{[
						['background', 'bg-background border'],
						['foreground', 'bg-foreground'],
						['primary', 'bg-primary'],
						['primary-foreground', 'bg-primary-foreground border'],
						['secondary', 'bg-secondary'],
						['muted', 'bg-muted'],
						['muted-foreground', 'bg-muted-foreground'],
						['accent', 'bg-accent'],
						['destructive', 'bg-destructive'],
						['border', 'bg-border'],
						['card', 'bg-card border'],
						['sidebar', 'bg-sidebar border'],
					].map(([name, cls]) => (
						<div key={name} className="flex flex-col gap-1">
							<div className={`h-10 rounded-md ${cls}`} />
							<span className="text-xs text-muted-foreground">{name}</span>
						</div>
					))}
				</div>
			</Section>
		</div>
	)
}

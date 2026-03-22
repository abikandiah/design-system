import { Badge } from '@/components/Badge'
import { Banner, bannerType } from '@/components/Banner'
import { Button } from '@/components/Button'
import { Separator } from '@/components/Separator'
import { Skeleton } from '@/components/Skeleton'
import { Toaster } from '@/components/Toaster'
import { toast } from 'sonner'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<section className="flex flex-col gap-4">
			<h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
			{children}
			<Separator />
		</section>
	)
}

export function FeedbackPage() {
	return (
		<div className="flex flex-col gap-8">
			<Toaster />

			<div>
				<h1 className="text-2xl font-bold text-foreground">Feedback</h1>
				<p className="text-muted-foreground mt-1">Banners, badges, toasts, and loading states.</p>
			</div>

			<Section title="Banners">
				<div className="flex flex-col gap-3 max-w-xl">
					<Banner type={bannerType.Info} title="Information">
						<p>This is an informational message. Here's something you should know.</p>
					</Banner>
					<Banner type={bannerType.Note} title="Note">
						<p>A helpful tip or supplementary detail for this section.</p>
					</Banner>
					<Banner type={bannerType.Warning} title="Warning">
						<p>Something might need your attention before proceeding.</p>
					</Banner>
					<Banner type={bannerType.Alert} title="Error">
						<p>Something went wrong. Please review and try again.</p>
					</Banner>
					<Banner type={bannerType.Info} title="Dismissible" onClose={() => {}}>
						<p>This banner has a close button.</p>
					</Banner>
					<Banner type={bannerType.Info} title="Loading" loading>
						{null}
					</Banner>
				</div>
			</Section>

			<Section title="Badges">
				<div className="flex flex-wrap gap-2 items-center">
					<Badge variant="default">Default</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="success">Success</Badge>
					<Badge variant="warning">Warning</Badge>
					<Badge variant="destructive">Destructive</Badge>
					<Badge variant="outline">Outline</Badge>
				</div>
				<div className="flex flex-wrap gap-2 items-center">
					<span className="text-sm text-foreground">In context:</span>
					<span className="text-sm font-medium text-foreground">PR #142</span>
					<Badge variant="success">Merged</Badge>
					<span className="text-sm font-medium text-foreground">Issue #89</span>
					<Badge variant="warning">In review</Badge>
					<span className="text-sm font-medium text-foreground">Deploy</span>
					<Badge variant="destructive">Failed</Badge>
				</div>
			</Section>

			<Section title="Toast notifications">
				<div className="flex flex-wrap gap-2">
					<Button variant="outline" onClick={() => toast('Event occurred')}>Default</Button>
					<Button variant="outline" onClick={() => toast.success('Saved successfully')}>Success</Button>
					<Button variant="outline" onClick={() => toast.error('Something went wrong')}>Error</Button>
					<Button variant="outline" onClick={() => toast.warning('Proceed with caution')}>Warning</Button>
					<Button variant="outline" onClick={() => toast.info('Here\'s some info')}>Info</Button>
					<Button variant="outline" onClick={() => toast.loading('Processing…')}>Loading</Button>
				</div>
			</Section>

			<Section title="Skeleton loading">
				<div className="flex flex-col gap-4 max-w-sm">
					{/* Card skeleton */}
					<div className="flex flex-col gap-2 rounded-lg border border-border p-4">
						<div className="flex items-center gap-3">
							<Skeleton className="h-10 w-10 rounded-full" />
							<div className="flex flex-col gap-1.5">
								<Skeleton className="h-4 w-32" />
								<Skeleton className="h-3 w-24" />
							</div>
						</div>
						<Skeleton className="h-3 w-full" />
						<Skeleton className="h-3 w-5/6" />
						<Skeleton className="h-3 w-4/6" />
					</div>
					{/* List skeleton */}
					<div className="flex flex-col gap-2">
						{[1, 2, 3].map(i => (
							<div key={i} className="flex items-center gap-3">
								<Skeleton className="h-4 w-4 rounded" />
								<Skeleton className="h-4 flex-1" />
								<Skeleton className="h-4 w-16" />
							</div>
						))}
					</div>
				</div>
			</Section>
		</div>
	)
}

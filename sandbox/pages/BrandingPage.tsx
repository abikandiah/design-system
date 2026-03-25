import { Separator } from '@/components/Separator'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<section className="flex flex-col gap-4">
			<h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
			{children}
			<Separator />
		</section>
	)
}

function Swatch({ varName, label, textVar }: { varName: string; label: string; textVar?: string }) {
	return (
		<div className="flex flex-col gap-1.5">
			<div
				className="h-16 rounded-lg border border-border/50 flex items-end p-2"
				style={{ background: `var(${varName})` }}
			>
				<span
					className="text-xs font-mono opacity-70"
					style={{ color: textVar ? `var(${textVar})` : undefined }}
				>
					{varName}
				</span>
			</div>
			<span className="text-xs text-muted-foreground font-medium">{label}</span>
		</div>
	)
}

function ChartSwatch({ varName, label }: { varName: string; label: string }) {
	return (
		<div className="flex items-center gap-3">
			<div
				className="h-8 w-8 rounded-md shrink-0"
				style={{ background: `var(${varName})` }}
			/>
			<div className="flex flex-col">
				<span className="text-xs font-medium text-foreground">{label}</span>
				<span className="text-xs font-mono text-muted-foreground">{varName}</span>
			</div>
		</div>
	)
}

export function BrandingPage() {
	return (
		<div className="flex flex-col gap-8">
			<div>
				<h1 className="text-2xl font-bold text-foreground">Branding</h1>
				<p className="text-muted-foreground mt-1">Brand palette and chart tokens — adapt per theme.</p>
			</div>

			<Section title="Brand palette">
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
					<Swatch varName="--color-canopy" label="Canopy — deep brand surface" textVar="--color-parchment" />
					<Swatch varName="--color-hive" label="Hive — brand accent" />
					<Swatch varName="--color-parchment" label="Parchment — light surface" />
				</div>
			</Section>

			<Section title="Chart — semantic (portfolio health)">
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
					<ChartSwatch varName="--chart-1" label="Occupied — good" />
					<ChartSwatch varName="--chart-2" label="Vacant — neutral" />
					<ChartSwatch varName="--chart-3" label="Notice given — warning" />
					<ChartSwatch varName="--chart-4" label="Under maintenance — bad" />
				</div>
			</Section>

			<Section title="Chart — categorical (unit mix)">
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
					<ChartSwatch varName="--chart-5" label="Unit type 1 — indigo" />
					<ChartSwatch varName="--chart-6" label="Unit type 2 — violet" />
					<ChartSwatch varName="--chart-7" label="Unit type 3 — pink" />
					<ChartSwatch varName="--chart-8" label="Unit type 4 — rose" />
				</div>
			</Section>

			<Section title="Canopy surface preview">
				<div
					className="rounded-xl p-6 flex flex-col gap-4"
					style={{ background: 'var(--color-canopy)' }}
				>
					<p className="text-sm font-semibold" style={{ color: 'var(--color-parchment)' }}>
						Canopy surface — how brand colors look composed together
					</p>
					<div className="flex flex-wrap gap-2">
						{['--chart-1', '--chart-2', '--chart-3', '--chart-4', '--chart-5', '--chart-6', '--chart-7', '--chart-8'].map((v) => (
							<div
								key={v}
								className="h-8 w-8 rounded-md"
								style={{ background: `var(${v})` }}
								title={v}
							/>
						))}
					</div>
					<button
						className="self-start px-4 py-2 rounded-lg text-sm font-semibold"
						style={{ background: 'var(--color-hive)', color: 'var(--color-canopy)' }}
					>
						Hive CTA
					</button>
				</div>
			</Section>
		</div>
	)
}

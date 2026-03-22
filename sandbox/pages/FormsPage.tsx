import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { Input } from '@/components/Input'
import { Label } from '@/components/Label'
import { Select } from '@/components/Select'
import { Separator } from '@/components/Separator'
import { Textarea } from '@/components/Textarea'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<section className="flex flex-col gap-4">
			<h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
			{children}
			<Separator />
		</section>
	)
}

export function FormsPage() {
	return (
		<div className="flex flex-col gap-8">
			<div>
				<h1 className="text-2xl font-bold text-foreground">Forms</h1>
				<p className="text-muted-foreground mt-1">Inputs, selects, checkboxes, and text areas.</p>
			</div>

			<Section title="Input">
				<div className="flex flex-col gap-3 max-w-sm">
					<div className="grid gap-1.5">
						<Label htmlFor="s-text">Text</Label>
						<Input id="s-text" placeholder="Enter some text" />
					</div>
					<div className="grid gap-1.5">
						<Label htmlFor="s-email">Email</Label>
						<Input id="s-email" type="email" placeholder="you@example.com" />
					</div>
					<div className="grid gap-1.5">
						<Label htmlFor="s-password">Password</Label>
						<Input id="s-password" type="password" placeholder="••••••••" />
					</div>
					<div className="grid gap-1.5">
						<Label htmlFor="s-disabled">Disabled</Label>
						<Input id="s-disabled" placeholder="Can't edit this" disabled />
					</div>
				</div>
			</Section>

			<Section title="Textarea">
				<div className="flex flex-col gap-3 max-w-sm">
					<div className="grid gap-1.5">
						<Label htmlFor="s-bio">Bio</Label>
						<Textarea id="s-bio" placeholder="Tell us about yourself..." rows={4} />
					</div>
					<div className="grid gap-1.5">
						<Label htmlFor="s-textarea-disabled">Disabled</Label>
						<Textarea id="s-textarea-disabled" placeholder="Read only" disabled />
					</div>
				</div>
			</Section>

			<Section title="Select">
				<div className="flex flex-col gap-3 max-w-sm">
					<div className="grid gap-1.5">
						<Label htmlFor="s-role">Role</Label>
						<Select id="s-role">
							<option value="">Select a role…</option>
							<option value="admin">Admin</option>
							<option value="editor">Editor</option>
							<option value="viewer">Viewer</option>
						</Select>
					</div>
					<div className="grid gap-1.5">
						<Label htmlFor="s-select-disabled">Disabled</Label>
						<Select id="s-select-disabled" disabled>
							<option>Not selectable</option>
						</Select>
					</div>
				</div>
			</Section>

			<Section title="Checkbox">
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-2">
						<Checkbox id="chk-1" />
						<Label htmlFor="chk-1">Accept terms and conditions</Label>
					</div>
					<div className="flex items-center gap-2">
						<Checkbox id="chk-2" defaultChecked />
						<Label htmlFor="chk-2">Subscribe to newsletter</Label>
					</div>
					<div className="flex items-center gap-2">
						<Checkbox id="chk-3" disabled />
						<Label htmlFor="chk-3" className="opacity-50">Disabled option</Label>
					</div>
				</div>
			</Section>

			<Section title="Full form example">
				<form className="flex flex-col gap-4 max-w-sm" onSubmit={e => e.preventDefault()}>
					<div className="grid gap-1.5">
						<Label htmlFor="f-name">Name</Label>
						<Input id="f-name" placeholder="Jane Smith" />
					</div>
					<div className="grid gap-1.5">
						<Label htmlFor="f-email">Email</Label>
						<Input id="f-email" type="email" placeholder="jane@example.com" />
					</div>
					<div className="grid gap-1.5">
						<Label htmlFor="f-role">Role</Label>
						<Select id="f-role">
							<option value="">Select…</option>
							<option value="admin">Admin</option>
							<option value="editor">Editor</option>
						</Select>
					</div>
					<div className="grid gap-1.5">
						<Label htmlFor="f-notes">Notes</Label>
						<Textarea id="f-notes" placeholder="Anything to add?" rows={3} />
					</div>
					<div className="flex items-center gap-2">
						<Checkbox id="f-agree" />
						<Label htmlFor="f-agree">I agree to the terms</Label>
					</div>
					<div className="flex gap-2">
						<Button type="submit">Submit</Button>
						<Button type="button" variant="outline">Cancel</Button>
					</div>
				</form>
			</Section>
		</div>
	)
}

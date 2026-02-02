import type { onClickCallback } from "@/types/types";
import { cn } from "@/utils";
import { CircleX, Info, Lightbulb, TriangleAlert, X } from "lucide-react";
import { Button } from "../Button";
import { Skeleton } from "../Skeleton";

const bannerType = {
	Info: 'info',
	Note: 'note',
	Warning: 'warning',
	Alert: 'alert'
} as const;

type TBannerType = (typeof bannerType)[keyof typeof bannerType];

const icons: Record<TBannerType, React.ComponentType> = {
	[bannerType.Info]: Info,
	[bannerType.Note]: Lightbulb,
	[bannerType.Warning]: TriangleAlert,
	[bannerType.Alert]: CircleX
};


interface BannerProps extends React.ComponentProps<"div"> {
	type: TBannerType;
	title?: string;
	loading?: boolean;
	hideIcon?: boolean;
	onClose?: onClickCallback<HTMLButtonElement>;
}

function Banner({ type, title, loading, hideIcon, onClose, children, className, ...props }: BannerProps) {
	const Icon = icons[type] ?? icons[bannerType.Note];

	return (
		<div
			data-banner-type={type}
			className={cn('p-3 border-l-4 rounded', className)}
			role="alert"
			{...props}
		>
			<div className={`flex items-start`}>
				{loading ?
					<BannerLoadingContent />
					:
					<>
						{!hideIcon &&
							<div className={`flex-shrink-0 mr-3`}>
								<Icon />
							</div>
						}
						<section>
							{title && (
								<p className={`font-bold`}>
									{title}
								</p>
							)}
							{children}
						</section>
					</>
				}

				{onClose &&
					<CloseButton onClick={onClose} />
				}
			</div>
		</div>
	)
}

interface MessageBannerProps extends BannerProps {
	message: string | React.ReactNode;
}

function MessageBanner({ message, ...props }: MessageBannerProps) {
	return (
		<Banner {...props}>
			<p className="text-sm">
				{message}
			</p>
		</Banner>
	)
}

function BannerLoadingContent() {
	return (
		<div className="flex items-center space-x-4">
			<Skeleton className="h-12 w-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	)
}

function CloseButton(props: React.ComponentProps<"button">) {
	return (
		<Button
			variant="ghost"
			size="icon"
			className="h-8 w-8 rounded-full ml-auto mb-auto relative -top-1 -right-1"
			{...props}
		>
			<X />
			<span className="sr-only">Close banner</span>
		</Button>
	);
}

export { Banner, bannerType, MessageBanner, type TBannerType };


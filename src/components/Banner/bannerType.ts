const bannerType = {
	Info: 'info',
	Note: 'note',
	Warning: 'warning',
	Alert: 'alert'
} as const;

type TBannerType = (typeof bannerType)[keyof typeof bannerType];

export { bannerType, type TBannerType };

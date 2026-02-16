import type { UseEmblaCarouselType } from "embla-carousel-react"
import type useEmblaCarousel from "embla-carousel-react"

export type ClickEvent<E> = React.MouseEvent<E> | React.TouchEvent<E>;
export type onClickCallback<E> = (event: ClickEvent<E>) => void;

export type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
export type CarouselOptions = UseCarouselParameters[0]
export type CarouselPlugin = UseCarouselParameters[1]


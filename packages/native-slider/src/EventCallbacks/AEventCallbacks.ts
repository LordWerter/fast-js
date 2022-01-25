export abstract class AEventCallbacks {
    public abstract onCarouselArrowClick: (direction: 'left' | 'right') => void;
    public abstract onSliderArrowClick: (direction: 'left' | 'right') => void;
    public abstract onDotClick: (dotNumber: any) => any;
    public abstract getVisibleElemsValue: () => number;
    public abstract setCarouselTransition2Right: (visibleElemsValue: number) => void;
    public abstract setCarouselTransition2Left: (visibleElemsValue: number) => void;
}

export default AEventCallbacks;

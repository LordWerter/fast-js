export type TAnimationFn = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier' | 'spring';

export abstract class ASettings {
    public abstract showArrows: boolean;
    public abstract showDots: boolean;
    public abstract autoplay: boolean;
    public abstract autoplaySpeed: number;
    public abstract infiniteTrack: boolean;
    public abstract firstSlide: number;
    public abstract slidesToShow: number;
    public abstract slidesToScroll: number;
    public abstract transitionTimeout: number;
    public abstract responsive: boolean;
    public abstract adaptiveHeight: boolean;
    public abstract devicePoints: any;

    public abstract centerMode: boolean;

    public abstract pauseOnHover: boolean;
    public abstract pauseOnDotsHover: boolean;

    public abstract touchMove: boolean;
    public abstract touchThreshold: number;

    public abstract animationSpeed: number;
    public abstract animationFn: TAnimationFn;

    public abstract set: (key: string, value: number | string) => boolean;
}

export default ASettings;

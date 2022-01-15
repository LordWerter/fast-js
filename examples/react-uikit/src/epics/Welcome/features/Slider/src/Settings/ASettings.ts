export type TAnimationFn = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier' | 'spring';

export type TSettingsOutput = {
    sliderType: 'slides' | 'carousel';
    wrapperSelector: string;
    trackSelector: string;
    elementSelector: string;
    leftArrowSelector: string;
    rightArrowSelector: string;
    dotClass: string;
    showArrows: boolean;
    showDots: boolean;
    autoplay: boolean;
    autoplaySpeed: number;
    infiniteTrack: boolean;
    firstSlide: number;
    slidesToShow: number;
    slidesToScroll: number;
    transitionTimeout: number;

    responsive: boolean;
    adaptiveHeight: boolean;
    devicePoints: any;

    centerMode: boolean;

    pauseOnHover: boolean;
    pauseOnDotsHover: boolean;

    touchMove: boolean;
    touchThreshold: number;

    animationSpeed: number;
    animationFn: TAnimationFn;
};

export abstract class ASettings {
    public abstract output: TSettingsOutput;

    public abstract getComputed: () => TSettingsOutput;

    public abstract set: (key: string, value: number | string) => boolean;
}

export default ASettings;

export type TAnimationFn = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier' | 'spring';

export type TSettingsOutput = {
    // type of slider
    type: 'slides' | 'carousel';
    scrollType: 'vertical' | 'horizontal';

    // Base selectors to get target DOM nodes
    sliderId: string;
    trackId: string;
    elementSelector: string;
    leftArrowId: string | null;
    rightArrowId: string | null;
    dotClass: string;

    // Showing params
    slidesToShow: number;
    slidesToScroll: number;
    firstSlide: number;
    // Show controls params
    showArrows: boolean;
    showDots: boolean;

    // Animation params
    animationSpeed: number;
    animationFn: TAnimationFn;
    transitionTimeout: number;

    // Playing slides params
    autoplay: boolean;
    autoplaySpeed: number;
    infiniteTrack: boolean;
    pauseOnHover: boolean;
    pauseOnDotsHover: boolean;

    touchMove: boolean;
    touchThreshold: number;
};

export abstract class ASettings {
    public abstract output: TSettingsOutput;

    public abstract getComputed: () => TSettingsOutput;

    public abstract set: (key: string, value: number | string) => boolean;
}

export default ASettings;

import {
    ASettings,
    TAnimationFn,
    TSettingsOutput
} from './ASettings';

export type TSettings = {
    // type of slider
    type?: 'slides' | 'carousel';
    scrollType?: 'vertical' | 'horizontal';

    // Base selectors to get target DOM nodes
    sliderId: string;
    trackId: string;
    elementSelector?: string;
    leftArrowId?: string | null;
    rightArrowId?: string | null;
    dotClass?: string;

    // Showing params
    slidesToShow?: number;
    slidesToScroll?: number;
    firstSlide?: number;
    // Show controls params
    showArrows?: boolean;
    showDots?: boolean;

    // Animation params
    animationSpeed?: number;
    animationFn?: TAnimationFn;
    transitionTimeout?: number;

    // Playing slides params
    autoplay?: boolean;
    autoplaySpeed?: number;
    infiniteTrack?: boolean;
    pauseOnHover?: boolean;
    pauseOnDotsHover?: boolean;

    touchMove?: boolean;
    touchThreshold?: number;

    handle2FirstSlide?: () => void;
    handle2LastSlide?: () => void;
    handle2Slide?: () => void;
};

export class Settings extends ASettings {
    public output: TSettingsOutput = {
        type: 'carousel',
        scrollType: 'horizontal',
        sliderId: 'native-slider',
        trackId: 'native-slider-track', // to get & move track if it's carousel
        elementSelector: '',
        leftArrowId: null, // to add event listener for left arrow by selector
        rightArrowId: null, // to add event listener for right arrow by selector
        dotClass: 'native-slider-dot', // to customize dot element
        showArrows: true,
        showDots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        infiniteTrack: true,
        firstSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        transitionTimeout: 500,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        touchMove: true,
        touchThreshold: 5,
        animationSpeed: 500,
        animationFn: 'linear',

        handle2FirstSlide: () => {
            return;
        },
        handle2LastSlide: () => {
            return;
        },
        handle2Slide: () => {
            return;
        },
    };

    constructor(settings: TSettings) {
        super();
        for (let key in this.output) {
            // @ts-ignore
            this.set(key, settings[key]);
        }
    }

    public getComputed = () => {
        return {...this.output};
    };

    public set = (key: string, value: any) => {
        if (this.output.hasOwnProperty(key)) {
            // @ts-ignore
            this.output[key] = value ? value : this.output[key];
        } else {

        }
        // @ts-ignore
        return !!this.output[key];
    }
}

export default Settings;

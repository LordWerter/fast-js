import {
    ASettings,
    TAnimationFn,
    // TSettingsOutput
} from './ASettings';

export type TSettings = {
    sliderType: 'slides' | 'carousel';

    wrapperSelector: string;
    trackSelector: string;
    elementSelector: string;

    leftArrowSelector?: string;
    rightArrowSelector?: string;
    showArrows?: boolean;

    dotClass?: string;
    showDots?: boolean;

    autoplay?: boolean;
    autoplaySpeed?: number;
    infiniteTrack?: boolean;

    firstSlide?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    transitionTimeout?: number;
    responsive?: boolean;
    adaptiveHeight?: boolean;
    devicePoints?: any;
    centerMode?: boolean;
    pauseOnHover?: boolean;
    pauseOnDotsHover?: boolean;
    touchMove?: boolean;
    touchThreshold?: number;
    animationSpeed?: number;
    animationFn?: TAnimationFn;
};

export class Settings extends ASettings {
    public output: any = {
        sliderType: 'carousel',
        wrapperSelector: '',
        elementSelector: '',
        trackSelector: 'slider-track', // to get & move track if it's carousel
        leftArrowSelector: 'left-arrow', // to add event listener for left arrow by selector
        rightArrowSelector: 'right-arrow', // to add event listener for right arrow by selector
        dotClass: 'dot', // to customize dot element
        showArrows: true,
        showDots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        infiniteTrack: true,
        firstSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        transitionTimeout: 500,
        responsive: true,
        adaptiveHeight: false,
        devicePoints: false,
        centerMode: false,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        touchMove: true,
        touchThreshold: 5,
        animationSpeed: 500,
        animationFn: 'linear',
    };

    constructor(settings: any) {
        super();
        for (let key in settings) {
            if (this.output.hasOwnProperty(key)) {
                this.set(key, settings[key]);
            } else {
                console.warn(`RUNTIME::ERROR::SETTINGS_ARG - unknown Setting Key: ${key}. Please check your Settings.`);
            }
        }
    }

    public getComputed = () => {
        return {...this.output};
    };

    public set = (key: string, value: number | string) => {
        this.output[key] = value;
        return !!this.output[key];
    }
}

export default Settings;

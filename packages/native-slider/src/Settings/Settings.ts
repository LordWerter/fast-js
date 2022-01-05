import {ASettings, TAnimationFn} from './ASettings';

export type TSettings = {
    showArrows?: boolean;
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
    public showArrows: boolean = true;
    public showDots: boolean = false;
    public autoplay: boolean = false;
    public autoplaySpeed: number = 3000;
    public infiniteTrack: boolean = true;
    public firstSlide: number = 0;
    public slidesToShow: number = 1;
    public slidesToScroll: number = 1;
    public transitionTimeout: number = 500;

    public responsive: boolean = true;
    public adaptiveHeight: boolean = false;
    public devicePoints: any = false;

    public centerMode: boolean = false;

    public pauseOnHover: boolean = true;
    public pauseOnDotsHover: boolean = false;

    public touchMove: boolean = true;
    public touchThreshold: number = 5;

    public animationSpeed: number = 500;  // timeout for transition animation amoung slides, milliseconds
    public animationFn: TAnimationFn = 'linear';  // animation function for transition amoung slides: linear, ease, ease-in, ease-out, ease-in-out


    constructor(settings?: TSettings) {
        super();
        for (let key in settings) {
            if (this.hasOwnProperty(key)) {
                this.set(key, settings[key]);
            } else {
                throw new Error(`RUNTIME::ERROR::SETTINGS_ARG - unknown Setting Key: ${key}`);
            }
        }
    }

    public set = (key: string, value: number | string) => {
        this[key] = value;
        return !!this[key];
    }
}

export default Settings;

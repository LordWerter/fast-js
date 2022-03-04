import ASliderFactory from './ASliderFactory';
import {Settings, TSettings, TSettingsOutput} from '../Settings';
import stylesMap from './stylesMap';
import ArrowsPanel from '../ArrowsPanel';
import EventCallbacks from '../EventCallbacks';

export type THTMLElement = HTMLElement | null;

export class SliderFactory extends ASliderFactory {
    public curSettings: TSettingsOutput;

    public slider: THTMLElement = null;
    public track: THTMLElement = null;
    public slideElements: HTMLElement[] = [];

    public eventCallbacks: any;
    public arrowsPanel: any;

    public stylesMap: any = {...stylesMap};

    public count: number = 1;

    constructor(settings: TSettings) {
        super();
        this.curSettings = new Settings(settings).getComputed();

        this.setInitialCSS();

        // блок кода ниже - заготовка под фичу с бесконечным скроллом трека карусели
        if (this.slider && this.curSettings.type === 'slides') {
            this.slider.querySelectorAll(this.curSettings.elementSelector).forEach((element: any) => {
                element.style.width = `${(this?.slider?.clientWidth ? this.slider.clientWidth : 0) / this.curSettings.slidesToShow}px`;
                this.slideElements.push(element);
            });
        }

        const slideElement = this?.track?.children?.item(0) || null;

        if (!this.slider || !this.track || !slideElement) {
            throw new Error('Не найдены элементы слайдера, которые являются для него обязательными');
        }

        this.eventCallbacks = new EventCallbacks({
            type: this.curSettings.type,
            view: this.slider,
            track: this.track,
            slideElementWidth: slideElement ? slideElement.clientWidth : 0,
            handle2FirstSlide: this.curSettings.handle2FirstSlide,
            handle2LastSlide: this.curSettings.handle2LastSlide,
        });

        const onArrowClick = this.curSettings.type === 'carousel' ? this.eventCallbacks.onCarouselArrowClick : this.eventCallbacks.onSliderArrowClick;

        this.arrowsPanel = new ArrowsPanel({
            sliderId: this.curSettings.sliderId,
            // @ts-ignore
            leftArrowId: this.curSettings.leftArrowId,
            // @ts-ignore
            rightArrowId: this.curSettings.rightArrowId,
            onLeftArrowClick: () => {
                onArrowClick('left');
            },
            onRightArrowClick: () => {
                onArrowClick('right');
            },
            showArrows: this.curSettings.showArrows,
        });
    }

    public setInitialCSS = () => {
        const sliderSelector = `#${this.curSettings.sliderId}`;
        this.setInitialCSSBySelector(sliderSelector, 'slider');

        const trackSelector = `#${this.curSettings.trackId}`;
        this.setInitialCSSBySelector(trackSelector, 'track');

        return;
    };

    public setInitialCSSBySelector = (selector: string, elemName: string) => {
        this[elemName] = this.getElementBySelector(selector);
        if (this[elemName]) {
            this.setCoreStyles(this[elemName], elemName);
        } else {
            throw new Error(`RUNTIME:STATUS:EXEPTION - Composition Element was not found by selector '${selector}'`);
        }
    };

    public getElementBySelector = (selector: string): HTMLElement | null => {
        const element: HTMLElement | null = document.querySelector(selector);
        if (!element) {
            console.warn(`Element with selector ${selector} not found`);
        }
        return element;
    };

    public setCoreStyles = (element: HTMLElement, elementName: string) => {
        const curStyles: any = {...this.stylesMap[elementName]};
        if (curStyles) {
            Object.keys(curStyles).forEach((key: any) => {
                // @ts-ignore
                element.style[key] = curStyles[key];
            });
            return true;
        }

        return false;
    };

    

}

export default SliderFactory;

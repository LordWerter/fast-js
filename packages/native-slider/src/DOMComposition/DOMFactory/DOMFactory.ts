import ADOMFactory from './ADOMFactory';
import {Settings, TSettings, TSettingsOutput} from '../../Settings';

export type THTMLElement = HTMLElement | null;

export class DOMFactory extends ADOMFactory {
    curSettings: TSettingsOutput;
    wrapper: THTMLElement;
    leftArrow: THTMLElement;
    rightArrow: THTMLElement;
    slidesTrack: THTMLElement;
    slideElements: HTMLElement[] = [];

    constructor(settings: TSettings) {
        super();
        this.curSettings = new Settings(settings).getComputed();
        this.wrapper = this.getElementBySelector(this.curSettings.wrapperSelector);
        this.leftArrow = this.getElementBySelector(this.curSettings.leftArrowSelector);
        this.rightArrow = this.getElementBySelector(this.curSettings.rightArrowSelector);
        this.slidesTrack = this.getElementBySelector(this.curSettings.trackSelector);
        if (this.wrapper && this.curSettings.sliderType === 'slides') {
            this.wrapper.querySelectorAll(this.curSettings.elementSelector).forEach((element: HTMLElement) => {
                this.slideElements.push(element);
            });
        }
    }

    public getElementBySelector = (selector: string): HTMLElement | null => {
        const element: HTMLElement | null = document.querySelector(selector);
        if (!element) {
            throw new Error(`Element with selector ${selector} not found`);
        }
        return element;
    };

    public setArrow = (direction: string, selector: string): THTMLElement => {
        let arrow: THTMLElement = this.getElementBySelector(selector);
        if (!arrow) {
            arrow = document.createElement('div');
            arrow.classList.add(`${this.curSettings.wrapperSelector.substring(1)}__${direction}-arrow`);
            if (this.wrapper) this.wrapper.appendChild(arrow);
        }
        return arrow;
    };

}

export default DOMFactory;

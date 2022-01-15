import ADOMFactory from './ADOMFactory';
import {Settings, TSettings, TSettingsOutput} from '../../Settings';
import stylesMap from './stylesMap';

export type THTMLElement = HTMLElement | null;

export class DOMFactory extends ADOMFactory {
    public curSettings: TSettingsOutput;
    public wrapper: THTMLElement = null;
    public leftArrow: THTMLElement = null;
    public rightArrow: THTMLElement = null;
    public slidesTrack: THTMLElement = null;
    public slideElements: HTMLElement[] = [];

    public stylesMap: any = {...stylesMap};

    public count: number = 1;

    constructor(settings: TSettings) {
        super();
        this.curSettings = new Settings(settings).getComputed();

        this.wrapper = this.getElementBySelector(this.curSettings.wrapperSelector);
        if (this.wrapper) this.setCoreStyles(this.wrapper, 'wrapper');

        if (this.curSettings.showArrows) {
            this.leftArrow = this.setArrow('left', this.curSettings.leftArrowSelector);
            this.rightArrow = this.setArrow('right', this.curSettings.rightArrowSelector);
            // @ts-ignore
            this.leftArrow.addEventListener('click', () => {
                const curLeft = this.slidesTrack?.getBoundingClientRect().left;
                this.count--;
                // @ts-ignore
                this.slidesTrack.style.left = `${curLeft + (this.wrapper?.clientWidth ? this.wrapper?.clientWidth : 1)}px`;
            });

            // @ts-ignore
            this.rightArrow.addEventListener('click', () => {
                const curLeft = this.slidesTrack?.getBoundingClientRect().left;
                // @ts-ignore
                this.slidesTrack.style.left = `${curLeft - (this.wrapper?.clientWidth ? this.wrapper?.clientWidth : 1)}px`;
            });
        }

        this.slidesTrack = this.getElementBySelector(this.curSettings.trackSelector);
        if (this.slidesTrack) this.setCoreStyles(this.slidesTrack, 'slidesTrack');

        if (this.wrapper && this.curSettings.sliderType === 'slides') {
            this.wrapper.querySelectorAll(this.curSettings.elementSelector).forEach((element: any) => {
                this.slideElements.push(element);
            });
        }
    }

    public getElementBySelector = (selector: string): HTMLElement | null => {
        const element: HTMLElement | null = document.querySelector(selector);
        if (!element) {
            console.warn(`Element with selector ${selector} not found`);
        }
        return element;
    };

    public setArrow = (direction: string, selector: string): THTMLElement => {
        let arrow: THTMLElement = this.getElementBySelector(selector);
        if (!arrow) {
            arrow = document.createElement('div');
            arrow.classList.add(`${this.curSettings.wrapperSelector.substring(1)}__${direction}-arrow`);
            this.setCoreStyles(arrow, direction === 'left' ? 'leftArrow' : 'rightArrow');
            if (this.wrapper) this.wrapper.appendChild(arrow);
        }
        return arrow;
    };

    public setCoreStyles = (element: HTMLElement, elementName: string) => {
        const curStyles: any = {...this.stylesMap[elementName]};
        Object.keys(curStyles).forEach((key: any) => {
            // @ts-ignore
            element.style[key] = curStyles[key];
        });
    };

    

}

export default DOMFactory;

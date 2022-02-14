import AEventCallbacks from './AEventCallbacks';

export type EventCallbacksParams = {
    type: 'carousel' | 'slides';
    view: HTMLElement;
    track: HTMLElement;
    slideElementWidth: number;
    handle2FirstSlide?: () => void;
    handle2LastSlide?: () => void;
    handle2Slide?: () => void;
}

export class EventCallbacks extends AEventCallbacks {
    params: any = null;
    visibleElemsValue: number = 0;
    viewedItemsCount: number = 0;
    totalElemsValue: number = 0;

    constructor(params: EventCallbacksParams) {
        super();
        this.params = params ? {...params} : null;
        this.visibleElemsValue = this.getVisibleElemsValue();
        this.viewedItemsCount = this.params.type === 'carousel' ? this.visibleElemsValue : 1;
        this.totalElemsValue = this.params.track.children.length;
    }

    public onSliderArrowClick = (direction: 'left' | 'right') => {
        direction === 'left' ? this.go2PrevSlide() :  this.go2NextSlide();
    };

    public go2PrevSlide = () => {
        if (this.viewedItemsCount === 1) {
            this.params.track.style.left = `0px`;
            return;
        }
        this.viewedItemsCount--;
        this.params.track.style.left = `${0 - (this.viewedItemsCount-1)*this.params.view.clientWidth}px`;
    }

    public go2NextSlide = () => {
        const {view, track} = this.params;
        const {viewedItemsCount, totalElemsValue} = this;
        let outputCount = viewedItemsCount;

        if (viewedItemsCount === totalElemsValue) {
            this.params.track.style.left = `${0 - (track.clientWidth - view.clientWidth)}px`;
        } else {
            this.params.track.style.left = `${0 - view.clientWidth * viewedItemsCount}px`;
            this.viewedItemsCount++;
        }
        return outputCount;
    }

    public onDotClick = (dotNumber: any) => {
        const visibleElemsValue = this.getVisibleElemsValue();
        const lastDotNum = Math.ceil(this.params.track.clientWidth / this.params.view.clientWidth);
        switch (dotNumber) {
            case 0:
                this.params.track.style.left = `0px`;
                this.viewedItemsCount = this.visibleElemsValue;
                break;
            case lastDotNum:
                this.params.track.style.left = `-${this.params.track.clientWidth - this.params.view.clientWidth}px`;
                this.viewedItemsCount = this.totalElemsValue;
                break;
            default:
                this.params.track.style.left = `-${this.viewedItemsCount * this.params.trackElemWidth}px`;
                this.viewedItemsCount = dotNumber * visibleElemsValue;
                break;
        }
    };

    public getVisibleElemsValue = (): number => {
        const {view, slideElementWidth} = this.params;
        return view && slideElementWidth ? Math.floor(view.clientWidth / slideElementWidth) : 0;
    };

    public onCarouselArrowClick = (direction: 'left' | 'right') => {
        const visibleElemsValue = this.getVisibleElemsValue();
        if (this.visibleElemsValue === visibleElemsValue) { // если ширина экрана не изменилась
            direction === 'left' ? this.setCarouselTransition2Left(visibleElemsValue) : this.setCarouselTransition2Right(visibleElemsValue);
        } else { // если ширина экрана поменялась
            this.visibleElemsValue = visibleElemsValue;
            direction === 'left' ? this.setCarouselTransition2Left(visibleElemsValue) : this.setCarouselTransition2Right(visibleElemsValue);
        }
    };

    public setCarouselTransition2Right = (visibleElemsValue: number) => {
        console.warn('setTransition2Right');
        const nextLastVisibleElem = this.viewedItemsCount + visibleElemsValue;
        if (nextLastVisibleElem < this.totalElemsValue) {
            this.params.track.style.left = `-${this.viewedItemsCount * this.params.slideElementWidth}px`;
            this.viewedItemsCount = this.viewedItemsCount + visibleElemsValue;
            if (this.params.handle2Slide) this.params.handle2Slide();
        } else {
            this.params.track.style.left = `-${this.params.track.clientWidth - this.params.view.clientWidth}px`;
            this.viewedItemsCount = this.totalElemsValue - visibleElemsValue;
            if (this.params.handle2LastSlide) this.params.handle2LastSlide();
        }
    };

    public setCarouselTransition2Left = (visibleElemsValue: number) => {
        console.warn('setTransition2Right');
        if (this.viewedItemsCount === this.totalElemsValue) {
            this.viewedItemsCount = Math.floor(this.totalElemsValue / visibleElemsValue) * visibleElemsValue;
            this.params.track.style.left = `-${(this.viewedItemsCount - visibleElemsValue) * this.params.slideElementWidth}px`;
            if (this.params.handle2Slide) this.params.handle2Slide();
            return;
        }
        const nextFirstVisibleElem = this.viewedItemsCount - visibleElemsValue;
        if (nextFirstVisibleElem > 0) {
            this.viewedItemsCount = nextFirstVisibleElem;
            this.params.track.style.left = `-${this.viewedItemsCount * this.params.slideElementWidth}px`;
            if (this.params.handle2Slide) this.params.handle2Slide();
        } else {
            this.viewedItemsCount = visibleElemsValue;
            this.params.track.style.left = `0px`;
            if (this.params.handle2FirstSlide) this.params.handle2FirstSlide();
        }
    };
}

export default EventCallbacks;

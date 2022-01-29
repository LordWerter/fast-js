import ADotsPanel from './ADotsPanel';

export class DotsPanel extends ADotsPanel {

    params: any = {};
    dotsWrapper: any = null;
    dots: any[] = [];
    dotsCount: number = 0;

    lastRun: Date | null = null;

    constructor(params: any) {
        super();
        this.params = {
            ...this.params,
            ...params,
        }

        this.dotsCount = this.getCurDotsCount(this.params.track.clientWidth, this.params.view.clientWidth);
        this.lastRun = new Date();

        this.addDotsWrapper(this.params.sliderId, this.params.dotsWrapperId);
        this.createDots({
            trackWidth: this.params.track.clientWidth,
            viewWidth: this.params.view.clientWidth,
            sliderId: this.params.sliderId,
            onDotClick: this.params.onDotClick,
        });
        document.addEventListener('resize', this.refreshDots);
    }

    addDotsWrapper = (sliderId: string, dotsWrapperId: string) => {
        this.dotsWrapper = document.getElementById(dotsWrapperId);
        if (!this.dotsWrapper) this.createDotsWrapper(sliderId);

        return this.dotsWrapper;
    };

    createDotsWrapper = (sliderId: string) => {
        this.dotsWrapper = document.createElement('div');
        this.dotsWrapper.classList.add(`${sliderId}__dots`);

        return this.dotsWrapper;
    };

    createDots = (params: {
        trackWidth: number,
        viewWidth: number,
        sliderId: string,
        onDotClick: (dotNum: number) => any
    }) => {
        const {
            trackWidth,
            viewWidth,
            sliderId,
            onDotClick,
        } = params;
        this.resetDots();
        this.dotsCount = this.getCurDotsCount(trackWidth, viewWidth);

        for (let i = 0; i < this.dotsCount; i++) {
            const curDotElement = this.createDot(sliderId, i, onDotClick);
            this.dots.push(curDotElement);
        }

        return this.dots;
    };

    resetDots = () => {
        if (this.dots.length) {
            this.dotsWrapper.innerHTML = '';
            this.dots = [];
            return true;
        }

        return false;
    };

    getCurDotsCount = (trackWidth: number, viewWidth: number) => {
        const dotsCount = Math.ceil(trackWidth / viewWidth);

        return dotsCount;
    }

    createDot = (sliderId: string, dotNumber: number, onDotClick: (dotNum: number) => any) => {
        const dotElement = document.createElement('div');
        dotElement.classList.add(`${sliderId}-dots__dot-element`);
        dotElement.addEventListener('click', () => {
            const onDotClickFn = onDotClick;
            const curDotNum = dotNumber;
            onDotClickFn(curDotNum);
        });
        this.dotsWrapper.appendChild(dotElement);

        return dotElement;
    };


    refreshDots = (): boolean => {
        const {track, view, sliderId, onDotClick} = this.params;
        if (!this.lastRun) return false;
        const curTime = new Date();
        const timeout = curTime.getTime() - this.lastRun.getTime();
        if (timeout > 1000) {
            this.createDots({
                sliderId,
                onDotClick,
                trackWidth: track.clientWidth,
                viewWidth: view.clientWidth,
            });
        }

        return !!this.dots.length;
    };
}

export default DotsPanel;

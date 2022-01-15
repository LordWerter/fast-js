import AArrowsPanel from './AArrowsPanel';

export type TNewArrowParams = {
    sliderId: string;
    direction: string;
    onArrowClick: (event?: MouseEvent) => any;
};

export class ArrowsPanel extends AArrowsPanel {
    public options: any = null;
    public arrows: any = {
        left: null,
        right: null,
    };

    constructor(options: any) {
        super();
        this.options = { ...options };
        this.arrows = [];
    }
    
    public createArrow(params: TNewArrowParams) {
        const {sliderId, direction, onArrowClick} = params;
        if (!this.arrows[direction]) return null;

        const mainWrapper: HTMLElement | null = document.querySelector(sliderId);
        if (!mainWrapper) {
            console.warn(`RUNTIME:STATUS:ARROW_PANEL - There is no any wrapper with id ${sliderId}. Arrow was not created!`)
            return null;
        }

        const arrow = document.createElement('div');
        arrow.classList.add(`${sliderId}__${direction}-arrow`);
        arrow.addEventListener('click', (event: MouseEvent) => {
            const onArrowClickFn = onArrowClick;
            onArrowClickFn(event);
        });
        mainWrapper.appendChild(arrow);

        return arrow;
    }

    public showArrows = () => {
        const leftArrow = this.toggleArrowVisibility(this.arrows.left);
        const rightArrow = this.toggleArrowVisibility(this.arrows.right);

        return !!leftArrow && !!rightArrow;
    }

    public toggleArrowVisibility = (arrow: any) => {
        const visibility = arrow.style.visibility;
        arrow.style.visibility = visibility === 'hidden' ? 'visible' : 'hidden';
        return arrow;
    };
}

export default ArrowsPanel;

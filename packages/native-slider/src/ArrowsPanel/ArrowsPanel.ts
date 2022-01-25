import AArrowsPanel from './AArrowsPanel';

export type TDirection = 'left' | 'right';

export type TNewArrowParams = {
    mainWrapper: HTMLElement;
    sliderId: string;
    direction: string;
};

export type TArrowsPanelParams = {
    sliderId: string;
    leftArrowId?: null,
    rightArrowId?: null,
    onLeftArrowClick: (...args: any) => any;
    onRightArrowClick: (...args: any) => any;
    showArrows?: boolean;
};

export class ArrowsPanel extends AArrowsPanel {
    public params: any = {
        sliderId: null,
        leftArrowId: null,
        rightArrowId: null,
        onLeftArrowClick: () => null,
        onRightArrowClick: () => null,
        showArrows: true,
    };
    public arrows: any = {
        left: null,
        right: null,
    };

    constructor(params: TArrowsPanelParams) {
        super();
        this.params = {
            ...this.params,
            ...params,
        };

        const selectedLeftArrow = this.selectArrow(this.params.leftArrowId);
        const selectedRightArrow = this.selectArrow(this.params.rightArrowId);

        this.arrows = this.setArrows(selectedLeftArrow, selectedRightArrow);

        if (!this.params.showArrows) this.toggleArrows();
    }

    public setArrows = (leftArrow: Element | false, rightArrow: Element | false) => {
        this.arrows = {
            left: leftArrow ? leftArrow : this.createArrow({
                mainWrapper: this.params.view,
                sliderId: this.params.sliderId,
                direction: 'left',
            }),
            right: rightArrow ? rightArrow : this.createArrow({
                mainWrapper: this.params.view,
                sliderId: this.params.sliderId,
                direction: 'right',
            }),
        };

        if (this.arrows.left) this.addArrowEventListener(this.arrows.left, this.params.onLeftArrowClick);
        if (this.arrows.right) this.addArrowEventListener(this.arrows.right, this.params.onRightArrowClick);
    };

    public selectArrow = (arrowId: string | null): Element | false => {
        if (!arrowId) return false;
        const arrow = document.getElementById(arrowId);
        if (!arrow) {
            console.warn(`RUNTIME:EXEPTION:STATUS - Arrow was not selected by id '${arrowId}'`);
            return false;
        }
        return arrow;
    };
    
    public createArrow(params: TNewArrowParams) {
        const {mainWrapper, sliderId, direction} = params;
        if (!this.arrows[direction]) return this.arrows[direction];

        const arrow = document.createElement('div');
        arrow.classList.add(`${sliderId}__${direction}-arrow`);
        mainWrapper.appendChild(arrow);

        return arrow;
    }

    public addArrowEventListener = (arrow: Element, onClick: any) => {
        arrow.addEventListener('click', () => {
            const fn = onClick;
            if (fn) fn();
        });
    }

    public toggleArrows = () => {
        const leftArrow = this.arrows.left ? this.toggleArrowVisibility(this.arrows.left) : false;
        const rightArrow = this.arrows.right ? this.toggleArrowVisibility(this.arrows.right) : false;

        return !!leftArrow && !!rightArrow;
    }

    public toggleArrowVisibility = (arrow: any) => {
        if (!arrow) {
            console.warn(`RUNTIME:STATUS:EXEPTION - Visibility was not set to arrow. There is no arrow!`)
            return false;
        }
        const visibility = arrow.style.visibility;
        arrow.style.visibility = visibility === 'hidden' ? 'visible' : 'hidden';
        return arrow;
    };
}

export default ArrowsPanel;

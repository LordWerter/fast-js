import AArrowsPanel from './AArrowsPanel';

export class ArrowsPanel extends AArrowsPanel {
    public options: any = null;
    public arrows: any[] = [];

    constructor(options: any) {
        super();
        this.options = { ...options };
        this.arrows = [];
    }
    
    createArrow(sliderId: string, direction: string, onArrowClick: any) {
        if (this.arrows.length >= 2) return;
        const mainWrapper: any = document.querySelector(sliderId);
        const arrow = document.createElement('div');
        arrow.classList.add(`arrow-${direction}`);
        arrow.classList.add(direction);
        arrow.classList.add('hidden');
        arrow.addEventListener('click', () => {
            const curDirection = direction;
            const onArrowClickFn = onArrowClick;

            onArrowClickFn(curDirection);
        });
        if (mainWrapper) {
            mainWrapper.style = 'position: relative';
            mainWrapper.appendChild(arrow);
        }

        this.arrows.push(arrow);

        return arrow;
    }

    showArrow(direction: string) {
        this.arrows.forEach(arrow => {
        if (arrow.classList.contains(direction)) {
            arrow.classList.remove('hidden');
        }
        });
    }
    
    hideArrow(direction: string) {
        this.arrows.forEach(arrow => {
        if (arrow.classList.contains(direction)) {
            arrow.classList.add('hidden');
        }
        });
    }

}

export default ArrowsPanel;

export type TSize = 'mobile' | 'laptop' | 'desktop';

export interface TElementProps {
    sizeId: TSize;
    theme?: unknown;
}

export default TElementProps;
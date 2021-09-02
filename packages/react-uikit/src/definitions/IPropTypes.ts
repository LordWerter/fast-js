export type TSize = 'mobile' | 'laptop' | 'desktop';

export type TTextBlockType = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'P';

export interface ICWrapProps {
    sizeId: TSize;
    theme?: any;
}

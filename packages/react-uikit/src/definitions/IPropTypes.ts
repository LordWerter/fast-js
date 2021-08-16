export type TSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type TTextBlockType = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'P';

export type TArray<T> = {
    [index: number]: T;
};

export type TDictionary<T> = {
    [index: string]: T;
};

export interface ICWrapProps {
    sizeId: TSize;
    theme?: any;
}

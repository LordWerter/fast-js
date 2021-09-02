export type TArray<T> = T[];

export type TList<T> = {
    [index: number]: T;
};

export type TDictionary<T> = {
    [index: string]: T;
};

export type TCollectionLink = string | 'SKIP' | null;
export type TSourceDataList<T> = Array<T>;

export type THashTable<IDeclaringType> = {
    [key in number | string]: IDeclaringType | number | boolean | string | null
};
export type TPropType = 'NESTED' 
export interface TPropDescriptor {
    type: TPropType;
    link: string;
    getter: () => unknown;
    setter: () => unknown;
}

export enum TCachedRecordActions {
    CREATE,

}

export interface IPropData2Cache {

}

export interface IPropDescriptor2Cache {

}

/**
 * RecordSource Annotation as specification
 */
export abstract class RecordSourceAnnotation<ITargetDescriptor> {
    public readonly id: string | null = null;
    public readonly collectionLink: TCollectionLink | null = null;
    public data: TSourceDataList<unknown> | null = null;
    public descriptors: ITargetDescriptor | null = null;
    public cacheStore: THashTable<unknown> = {};

    constructor(descriptorList, sourceDataList: TSourceDataList<number | string | boolean | {[key in number | string]: unknown}>) {};

    public abstract init: (descriptorsConfig, sourceDataList: TSourceDataList<any>) => Promise<boolean>;

    public abstract definePropertyDescriptor: (curPropName: string, curDescriptor: TPropDescriptor) => Promise<boolean>;

    public abstract setPropertyData: (link: string, curPropData: any) => Promise<boolean>;

    public abstract getPropertyData: () => Promise<boolean>;

    public abstract checkPropertyData: () => Promise<boolean>;

    public abstract changePropertyData: () => Promise<boolean>;

    public abstract removeProperty: () => Promise<boolean>;

    public abstract addCacheRecord: (propData2Cache: IPropData2Cache, propDescriptor2Cache: IPropDescriptor2Cache) => Promise<boolean>;

    public abstract removeCacheRecord: (cachedPropID: string) => Promise<boolean>;

    public abstract runExpireTimeCounter: () => Promise<unknown>;
}

export default RecordSourceAnnotation;

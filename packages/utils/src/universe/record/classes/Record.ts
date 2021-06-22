import { createUUID as createID } from '../../hash/createUUID';
import RecordSourceAnnotation from './RecordAnnotation';

import { TCollectionLink, TSourceDataList, THashTable, TPropDescriptor } from './RecordAnnotation';

export class  RecordSource extends RecordSourceAnnotation<any> {

    public readonly id: string | null = null;
    public readonly collectionLink: TCollectionLink | null = null;
    public data: TSourceDataList<any> | null = null;
    public descriptors: {[key: string]: TPropDescriptor} | null = null;
    public cacheStore: THashTable<any> = {};


    constructor(descriptorList, sourceDataList: TSourceDataList<any>) {
        super(descriptorList, sourceDataList);

        this.id = createID();
        this.descriptors = {};
        this.data = new Array(descriptorList.length);

        for (let descriptorName of descriptorList) {
            const { type, link, getter, setter } = descriptorList[descriptorName];
            const curData = typeof(sourceDataList[link]) === 'object' ? { ...sourceDataList[link] } : sourceDataList[link];
            this[descriptorName] = {
                type,
                link,
                getter,
                setter,
            }
            this.data[link] = curData;
        }
        
    }

    public init = (descriptorsConfig, sourceDataList): Promise<boolean> => {
        return new Promise((resolve) => {
            resolve(true);
        });
    }

    public definePropertyDescriptor = (propName, curDescriptor): Promise<boolean> => {
        return new Promise((resolve) => {
            const { type, link } = curDescriptor;
            Object.defineProperty(this, propName, {
                value: {
                    type,
                    link,
                },
                writable: true,
                enumerable: true,
                configurable: true,
                get: function(getLink?: boolean) {
                    return !!getLink ? link : type;
                },
                set: (value: unknown) => {
                    const key = propName;
                    const index = link;
                    const propType = type;
                    if(!value) {
                        // current property will be deleted if value is null or empty string
                        delete this[key];
                        this.data = this.data.splice(index - 1, index + 1);
                        return Promise.resolve('DELETED');
                    } else if(value) {
                        if (typeof(value) === 'object') {
                            this.data[index] = { ...this.data[index], ...value };
                        } else {
                            this.data[index] += value;
                        }
                    } else if(typeof(this.data[index]) !== typeof(value)) {
                        console.warn(`RUNTIME:ERROR
                            Property type is not assignable with value type!
                            Please, check input data for type or annotation for props dublicates.`, {
                                recordID: this.id,
                                propName: key,

                            });
                        return Promise.resolve(false);
                    }
                }
            });

            resolve(true);
        });
    }

    public setPropertyData = (link: string, curPropData: any): Promise<boolean> => {
        return new Promise((resolve) => {
            this.data[link] = typeof(curPropData) !== 'object' ? curPropData : Array.isArray(curPropData) ? [ ...curPropData ] : { ...curPropData };
            resolve(true);
        });
    }

    public defineProperty = (curDescriptor, curDataValue) => {
        return new Promise((resolve) => {
        this.definePropertyDescriptor(curDescriptor.name, curDescriptor).then(() => {
            this.setPropertyData(curDescriptor.link, curDataValue).then(() => {
                resolve(true);
            });;
        })
    });
    }

    public getData = (): Promise<Array<unknown>> => {
        return new Promise((resolve) => {
            resolve(this.data);
        });
    }


    public checkPropertyData = (): Promise<boolean> => {
        return new Promise((resolve) => {
            resolve(true);
        });
    }

    public keys = () => Object.keys(this);

    public delete = (propName): Promise<boolean> => {
        return new Promise((resolve) => {
            const link = this[propName];
            this.data = this.data.splice(link-1, 1);
            resolve(true);
        });
    }


    public addCacheRecord = (propData2Cache, propDescriptor2Cache): Promise<boolean> => {
        return new Promise((resolve) => {
            resolve(true);
        });
    }
}

export default RecordSource;

import { checkToHasObjectProperty } from './hasObjectProperty';

export interface IPropParams {
    name: string;
    value: number | string | boolean | null;
}

//@ts-ignore
export const isObjectPropEqualTo = (target: Object, { name, value }: IPropParams) => (target[name] === value ? true : false);

export const isObjectPropEqualToPromise = (target: Object, propParams: IPropParams): Promise<boolean> =>
    new Promise((resolve) => {
        resolve(isObjectPropEqualTo(target, propParams))
    });

export const checkToObjectPropEqualTo = (target: Object, propParams: IPropParams): Promise<boolean> =>
//@ts-ignore
    checkToHasObjectProperty(target, propParams.name).then(() => isObjectPropEqualTo(target, propParams));

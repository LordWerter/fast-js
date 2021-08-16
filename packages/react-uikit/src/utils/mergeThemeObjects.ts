import { Obj } from '@fast-js/utils';

/**
 * merge main and custom theme objects
 * @param {any} mainTheme
 * @param {any} customStyles
 * @returns {any}
 */
export const mergeThemeObjects = (mainTheme: any, customStyles: any): any => {
    const theme = { ...mainTheme };
    const custom = { ...customStyles };
    let result = {};

    if (mainTheme) {
        if (customStyles) {
            result = Obj.mergeDeep(theme, custom);
        } else {
            result = {
                ...theme,
            };
        }
    }

    return result;
};

export default mergeThemeObjects;

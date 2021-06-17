import utils from '../../../utils'

/**
 * merge main and custom theme objects
 * @param mainTheme 
 * @param customStyles 
 */
export const mergeThemeObjects = (mainTheme: Object, customStyles: Object): any => {
    const theme = { ...mainTheme };
    const custom = { ...customStyles };
    let result = {};

    if (!!mainTheme) {
        if (!!customStyles) {
            result = utils.mergeDeep(theme, custom);
        } else {
            result = {
                ...theme,
            }
        }
    }
    return result;
};

export default mergeThemeObjects;

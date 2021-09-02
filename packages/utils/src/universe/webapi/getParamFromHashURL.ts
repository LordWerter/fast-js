import { genObjectFromPairsArr } from "../object/genObjectFromPairsArr";

export const getParamFromHashURL = (paramName: string): string | null => {
    const hashStr = window.location.hash.substr(1);

    const pairsArr = hashStr.split('&');
    const hashObj = genObjectFromPairsArr(pairsArr, '=');
    return hashObj[paramName] || null;
};

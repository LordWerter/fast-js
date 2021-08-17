import { default as EnKeys } from './en';
import { default as RuKeys } from './ru';
import { default as Symbols } from './symbols';

export const lang: any = {
    en: { ...EnKeys },
    ru: { ...RuKeys },
    symbols: { ...Symbols },
};

export default lang;

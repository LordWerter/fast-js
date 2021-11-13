import cwrap from './cwrap'
import hidden from './hidden';
import separator from './separator';
import separatorMiddle from './separatorMiddle';

export interface ICTheme {
    cwrap: typeof cwrap;
    hidden: typeof hidden;
    separator: typeof separator;
    separatorMiddle: typeof separatorMiddle;
}

export const CTheme: ICTheme = {
    cwrap,
    hidden,
    separator,
    separatorMiddle,
};

export default CTheme;
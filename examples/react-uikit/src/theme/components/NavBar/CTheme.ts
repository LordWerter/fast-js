import cwrap from './cwrap'
import hidden from './hidden';
import separatorMiddle from './separatorMiddle';

export interface ICTheme {
    cwrap: typeof cwrap;
    hidden: typeof hidden;
    separatorMiddle: typeof separatorMiddle;
}

export const CTheme: ICTheme = {
    cwrap,
    hidden,
    separatorMiddle,
};

export default CTheme;
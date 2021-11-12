import cwrap from './cwrap'
import hidden from './hidden';

export interface ICTheme {
    cwrap: typeof cwrap;
    hidden: typeof hidden;
}

export const CTheme: ICTheme = {
    cwrap,
    hidden,
};

export default CTheme;
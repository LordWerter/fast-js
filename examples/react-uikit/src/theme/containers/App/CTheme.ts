import cwrap from "./cwrap";

export interface ICTheme {
    cwrap: typeof cwrap;
}

export const CTheme: ICTheme = {
    cwrap,
};

export default CTheme;
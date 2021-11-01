import logo from "./logo";
import cwrap from "./cwrap";

export interface ICTheme {
    logo: typeof logo;
    cwrap: typeof cwrap;
}

export const CTheme: ICTheme = {
    logo,
    cwrap,
};

export default CTheme;

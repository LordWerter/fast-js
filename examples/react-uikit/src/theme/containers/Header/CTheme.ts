import logo from "./logo";
import cwrap from "./cwrap";
import menuwrap from "./menuwrap";

export interface ICTheme {
    logo: typeof logo;
    cwrap: typeof cwrap;
    menuwrap: typeof menuwrap;
}

export const CTheme: ICTheme = {
    logo,
    cwrap,
    menuwrap,
};

export default CTheme;

import cwrap from "./cwrap";
import slidenoactive from './slidenoactive';
import slideactiveanim from './slideactiveanim';
import leftarrow from "./leftarrow";
import rightarrow from "./rightarrow";
import dots from "./dots";
import dotactive from "./dotactive";
import dotswrap from "./dotswrap";

export interface ICTheme {
    cwrap: typeof cwrap;
    slidenoactive: typeof slidenoactive;
    slideactiveanim: typeof slideactiveanim;
    leftarrow: typeof leftarrow;
    rightarrow: typeof rightarrow;
    dots: typeof dots;
    dotactive: typeof dotactive;
    dotswrap: typeof dotswrap;
}

export const CTheme: ICTheme = {
    cwrap,
    slidenoactive,
    slideactiveanim,
    leftarrow,
    rightarrow,
    dotactive,
    dots,
    dotswrap,
};

export default CTheme;

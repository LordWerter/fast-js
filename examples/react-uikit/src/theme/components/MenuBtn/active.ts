import { TCSSObjProps } from "../../../definitions";
import { MENU__BTN_WRAP } from "../../mixins";
import { zoomOut, bottomUp, topDown } from "./keyframes";

export const blocks: TCSSObjProps = {
    core: {
        ...MENU__BTN_WRAP,
        '& :nth-of-type(1)': {
            animation: `ease .7s ${topDown} forwards`,
        },
        '& :nth-of-type(2)': {
            animation: `ease .7s ${zoomOut} forwards`,
        },
        '& :nth-of-type(3)': {
            animation: `ease .7s ${bottomUp} forwards`,
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
import { TCSSObjProps } from "../../../definitions";
import { MENU__BTN_WRAP } from "../../mixins";
import { zoomOut, bottomUp, topDown } from "./keyframes";

export const blocks: TCSSObjProps = {
    core: {
        ...MENU__BTN_WRAP,
        '& :nth-child(1)': {
            animation: `ease .7s ${topDown} forwards`,
        },
        '& :nth-child(2)': {
            animation: `ease .7s ${zoomOut} forwards`,
        },
        '& :nth-child(3)': {
            animation: `ease .7s ${bottomUp} forwards`,
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
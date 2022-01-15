import { TCSSObjProps } from "../../../definitions";
import { MENU__BTN_WRAP } from "../../mixins";
import { bottomDown, topUp, zoomIn } from "./keyframes";

export const blocks: TCSSObjProps = {
    core: {
        ...MENU__BTN_WRAP,
        '& :nth-of-type(1)': {
            animation: `ease .7s ${topUp} forwards`,
        },
        '& :nth-of-type(2)': {
            animation: `ease .7s ${zoomIn} forwards`,
        },
        '& :nth-of-type(3)': {
            animation: `ease .7s ${bottomDown} forwards`,
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
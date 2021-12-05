import { TCSSObjProps } from "../../../definitions";
import { MENU__BTN_WRAP } from "../../mixins";
import { zoomOut, bottom, top } from "./keyframes";

export const blocks: TCSSObjProps = {
    core: {
        ...MENU__BTN_WRAP,
        '& :nth-child(1)': {
            animation: `ease .7s ${top} forwards`,
        },
        '& :nth-child(2)': {
            animation: `ease .7s ${zoomOut} forwards`,
        },
        '& :nth-child(3)': {
            animation: `ease .7s ${bottom} forwards`,
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
import { TCSSObjProps } from "../../../definitions";
import { MENU__BTN_WRAP } from "../../mixins";
import { bottom2, top2, zoomIn } from "./keyframes";

export const blocks: TCSSObjProps = {
    core: {
        ...MENU__BTN_WRAP,
        '& :nth-child(1)': {
            animation: `ease .7s ${top2} forwards`,
        },
        '& :nth-child(2)': {
            animation: `ease .7s ${zoomIn} forwards`,
        },
        '& :nth-child(3)': {
            animation: `ease .7s ${bottom2} forwards`,
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
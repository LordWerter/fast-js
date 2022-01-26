import { TCSSObjProps } from "../../../definitions";
import { IMG_WRAP } from "../../mixins";

export const blocks: TCSSObjProps = {
    core: {
        ...IMG_WRAP,
        opacity: '0',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
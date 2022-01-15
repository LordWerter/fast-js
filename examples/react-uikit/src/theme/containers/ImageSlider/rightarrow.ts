import { TCSSObjProps } from "../../../definitions";
import { RIGHT_ARROW } from "../../images";
import { ARROW_WRAP } from "../../mixins";

export const blocks: TCSSObjProps = {
    core: {
        ...ARROW_WRAP,
        backgroundImage: `url('${RIGHT_ARROW}')`,
        transition: 'right ease-in-out 0.3s',
        right: '-200px',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
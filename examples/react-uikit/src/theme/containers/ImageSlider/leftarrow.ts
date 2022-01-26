import { TCSSObjProps } from "../../../definitions";
import { LEFT_ARROW } from "../../images";
import { ARROW_WRAP } from "../../mixins";

export const blocks: TCSSObjProps = {
    core: {
        ...ARROW_WRAP,
        backgroundImage: `url('${LEFT_ARROW}')`,
        transition: 'left ease-in-out 0.3s',
        left: '-200px',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
import { TCSSObjProps } from "../../../definitions";
import { RIGHT_ARROW } from "../../images";
import { ARROW_WRAP } from "../../mixins";

export const blocks: TCSSObjProps = {
    core: {
        ...ARROW_WRAP,
        right: 0,
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
            backgroundImage: `url('${RIGHT_ARROW}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
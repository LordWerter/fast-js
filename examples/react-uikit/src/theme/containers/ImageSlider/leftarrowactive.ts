import { TCSSObjProps } from "../../../definitions";
import { LEFT_ARROW } from "../../images";
import { ARROW_WRAP } from "../../mixins";

export const blocks: TCSSObjProps = {
    core: {
        ...ARROW_WRAP,
        backgroundImage: `url('${LEFT_ARROW}')`,
        transition: 'left ease-in-out 0.3s',
        left: 0,
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
            backgroundImage: `url('${LEFT_ARROW}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
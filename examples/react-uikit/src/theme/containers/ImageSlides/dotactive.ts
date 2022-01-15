import { TCSSObjProps } from "../../../definitions";
import { DOTS } from "../../mixins";

export const blocks: TCSSObjProps = {
    core: {
        ...DOTS,
        background: 'rgb(32, 32, 32)',
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
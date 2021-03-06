import { TCSSObjProps } from '../../../definitions';
import {LOGOS__HEADER} from '../../images';

export const blocks: TCSSObjProps = {
    core: {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundImage: `url('${LOGOS__HEADER}')`,
        height: '95px',
        width: '85px',
        
    },
    mobile: {},
    laptop: {},
    desktop: {
    },
}

export default blocks;
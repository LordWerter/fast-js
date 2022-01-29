import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      visibility: 'hidden',
      position: 'absolute',
      top: '176px',
      height: 'max-content',
      width: 'max-content',
      backgroundColor: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;
import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      padding: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: '1 1 auto',
      justifyContent: 'space-evenly',
      backgroundColor: 'lightgreen',
      '& > h1': {
         textAlign: 'center',
         fontSize: '7rem',
      },
      '& .textContent': {
         marginTop: '50px',
         fontSize: '1.5rem',
         flexBasis: 'auto',
         textAlign: 'justify',
         display: 'flex',
         justifyContent: 'space-around',
      },
      '& .textContent div': {
         flexBasis: '30%',
      },
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;
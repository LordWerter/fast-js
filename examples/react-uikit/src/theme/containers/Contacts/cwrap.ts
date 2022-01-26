import { TCSSObjProps } from "../../../definitions";

export const blocks: TCSSObjProps = {
   core: {
      paddingTop: '5vw',
      paddingBottom: '5vw',
      width: '100vw',
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
         marginTop: '5rem',
         width: '80vw',
         fontSize: '1.5rem',
         textAlign: 'justify',
         display: 'flex',
         alignItems: 'flex-start',
         justifyContent: 'space-around',
         flexWrap: 'wrap',
      },
      '& .textContent div': {
         minWidth: '350px',
         maxWidth: '30vw',
      },
      '& .textContent :first-of-type': {
         marginRight: '30px',
         marginBottom: '30px',
      },
   },
   mobile: {},
   laptop: {},
   desktop: {},
};

export default blocks;
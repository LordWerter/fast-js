export const blocks = {
    core: {
        position: 'relative',
        top: '151px',
        height: '250px',
        width: '300px',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        '& > a': {          
            fontSize: '3rem',
            textDecoration: 'none',
            color: 'white',
        },
        '& .separator': {
            backgroundColor: 'white',
            height: '1px',
            justifySelf: 'flex-start',
            width: '100%',
        },
        '& .separator .middle': {
            width: '80%',
            alignSelf: 'center',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
}

export default blocks;
export const blocks = {
    core: {
        height: '100px',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '& .menu_wrapper': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
        },
    },
    mobile: {},
    laptop: {},
    desktop: {},
};

export default blocks;
export default {
    test__simpleFns: {
        wasOpened: () => {return;},
        wasClosed: () => {return;},
        wasReceived: () => {return;},
        wasError: () => {return;},
        wasSent: () => {return;},
    },
    test__dataFns: {
        wasOpened: () => true,
        wasClosed: () => true,
        wasReceived: () => true,
        wasError: () => true,
        wasSent: () => true,
    },
    test__promisedDataFns: {
        wasOpened: () => Promise.resolve(true),
        wasClosed: () => Promise.resolve(true),
        wasReceived: () => Promise.resolve(true),
        wasError: () => Promise.resolve(true),
        wasSent: () => Promise.resolve(true),
    },
}
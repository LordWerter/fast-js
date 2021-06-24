import WebSocket from 'jest-websocket-mock';
import { Obj } from '@fast-js/utils';

import WSConnect from '../WSConnect';
import { TCallbackName } from '../AWSConnect';
import { TClassMethodName } from '../AWSConnect';

let wsConnect: any = null;

const checkInitialEventCallback = (callbackName: TCallbackName) => {
    expect(wsConnect.eventCallbacks.hasOwnProperty(callbackName)).toEqual(true);
    expect(typeof wsConnect.eventCallbacks[callbackName] === 'function').toEqual(true);
    wsConnect.eventCallbacks[callbackName]().then((result: boolean) => {
        expect(result).toEqual(false);
    });
};

const checkClassMethod = (callbackName: TClassMethodName) => {
    expect(wsConnect.hasOwnProperty(callbackName)).toEqual(true);
    expect(typeof wsConnect[callbackName] === 'function').toEqual(true);
};

const eventCallbackNames: TCallbackName[] = ['wasOpened', 'wasClosed', 'wasSent', 'wasReceived', 'wasError'];

const ClassMethodNames: TClassMethodName[] = [
    'getReadyState',
    'send', 'exit',
    'handleOnOpen', 'handleOnClose',
    'handleOnMessage', 'handleOnError',
    'try2Reconnect', 'runEventCallback'
];

describe('WSConnect instance props with default settings', () => {
    /*
    const mockSettings = {};
    const mockOptions = {};
*/

    beforeEach(() => {
        //@ts-ignore
        global.WebSocket = WebSocket;
        wsConnect = new WSConnect();
        console.log(JSON.stringify(wsConnect.settings))
    });

    afterEach(() => {
        wsConnect.exit();
    });

    it('wsConnect.settings', () => {
        expect(!!wsConnect.settings).toEqual(true);
    });

    it('wsConnect.socket', () => {
        expect(wsConnect.socket !== null).toEqual(true);
    });

    it('wsConnect.eventCallbacks has all needed callbacks', () => {
        expect(!!wsConnect.eventCallbacks).toEqual(true);
        expect(typeof wsConnect.eventCallbacks === 'object').toEqual(true);
        eventCallbackNames.forEach((callbackName: TCallbackName) => checkInitialEventCallback(callbackName));
    });

    it('wsConnect methods is defined', () => {
        ClassMethodNames.forEach((methodName: TClassMethodName) => checkClassMethod(methodName));
    });
});

describe('WSConnect.constructor', () => {
    it('description', () => {
        //@ts-ignore
        global.WebSocket = WebSocket;
        wsConnect = new WSConnect();
        expect(null).toEqual(null);
    });
});

describe('WSConnect.eventCallbacks', () => {
    /*
        const mockSettings = {};
        const mockOptions = {};
        beforeEach(() => {});
    */
    it('description', () => {
        //@ts-ignore
        global.WebSocket = WebSocket;
        wsConnect = new WSConnect();
        expect(result).toEqual(null);
    });
});

describe('WSConnect.init', () => {
    /*
        const mockSettings = {};
        const mockOptions = {};
        beforeEach(() => {});
    */
    it('description', () => {
        const result = null;
        expect(result).toEqual(null);
    });
});

describe('WSConnect.createWebSocketConnection', () => {
    /*
        const mockSettings = {};
        const mockOptions = {};
        beforeEach(() => {});
    */
    it('description', () => {
        const result = null;
        expect(result).toEqual(null);
    });
});

describe('WSConnect.exit', () => {
    /*
        const mockSettings = {};
        const mockOptions = {};
        beforeEach(() => {});
    */
    it('description', () => {
        const result = null;
        expect(result).toEqual(null);
    });
});

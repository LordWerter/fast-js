import { Obj } from '@fast-js/utils';
import AWSConnect, { TSettings, ISettings, TEventCallbacks, TCallbackName, TSendFn, TMethodFn } from './AWSConnect';
import wsStateMap from './wsStateMap';

export default class WSConnect extends AWSConnect {
    public settings: TSettings = {
        host: {
            protocol: 'ws',
            name: 'localhost:8080',
            url: '',
        },
        reconnect: {
            enabled: false,
            timeout: 500,
            increaseTimeout: true,
        },
        debug: {
            enabled: false,
            checkConfig: true,
            checkNetwork: false,
            checkMsgExchange: false,
        },
        logs: {
            enabled: false,
            mode: 'PROD',
            logFn: console.log,
        },
        exit: {
            enabled: false,
            msg2Server: null,
        },
    };
    public eventCallbacks: TEventCallbacks = {
        wasOpened: () => Promise.resolve(false),
        wasClosed: () => Promise.resolve(false),
        wasReceived: () => Promise.resolve(false),
        wasError: () => Promise.resolve(false),
        wasSent: () => Promise.resolve(false),
    };
    public socket: WebSocket | null = null;

    public wsStates = { ...wsStateMap };

    private timerID: any | null;

    constructor(settings?: ISettings, eventCallbacks?: TEventCallbacks) {
        super(settings, eventCallbacks);

        this.settings = {
            ...this.settings,
            host: settings && settings.host ? {...settings.host} : {...this.settings.host},
        };

        if(settings && settings.options) this.settings = {
            ...this.settings,
            ...settings.options,          
        };


        this.eventCallbacks = {
            ...this.eventCallbacks,
            ...eventCallbacks,
        };

        this.socket = this.init();

        if (
            !settings &&
            this.settings.debug.checkConfig
        ) {
            console.error(`
            Warning! WSConnect was run with defaults. Sometimes we use preloaded core configs from 
            separate backend service via simple GET request. But this service can be unavailable.
            You can enable notices with config validation results to debug this case.
        `);
        }
    }

    /**
     * creates native WebSocket Class instance 4 organizing connection with server
     * @returns WebSocket instance
     */
    public createWebSocketConnection(): WebSocket {
        const { protocol, name, url } = this.settings.host;
        return new WebSocket(`${protocol}://${name}/${url}`);
    }

    /**
     * creates ws connection & event listeners for it
     * @returns WebSocket
     */
    public init(): WebSocket {
        const ws = this.createWebSocketConnection();

        ws.onopen = this.handleOnOpen;
        ws.onclose = this.handleOnClose;
        ws.onmessage = this.handleOnMessage;
        ws.onerror = this.handleOnError;
        return ws;
    }

    /**
     * gets current state of connection
     *
     * @returns number | false
     */
    public getReadyState = () => {
        return this.socket ? this.socket.readyState : false;
    };

    /**
     * gets the number of bytes of data that have been queued using calls to send() but not yet transmitted to the network
     * @returns
     */
    public getBufferedAmount = () => {
        return this.socket ? this.socket.bufferedAmount : null;
    };

    /**
     * sends data object 2 server
     * @param {Object} data
     * @returns {Promise<any>}
     */
    public send: TSendFn = async (data) => {
        if (this.socket) {
            await this.socket.send(JSON.stringify(data));
            return true;
        }
        console.warn(`
            Oops, something went wrong with Network!
            May be Internet is unstable. WSConnect doesn't make reconnections when it happens. 
            But this mechanics can be enabled via "options" argument. Please, read more by link - 
        `);
        return false;
    };

    public exit: TMethodFn = async () => {
        if (this.socket === null) return false;
        const exitMsg =
            this.settings.exit &&
            this.settings.exit.enabled &&
            this.settings.exit.msg2Server
                ? this.settings.exit.msg2Server
                : null;
        if (!!exitMsg) await this.socket.send(JSON.stringify(this.settings.exit.msg2Server));
        await this.socket.close();
        this.settings.reconnect.enabled = false;
        return true;
    };

    /**
     * handles onopen event 4 WSConnect
     * @param event
     * @returns any
     */
    public handleOnOpen = async (event: Event) => {
        return await this.runEventCallback('wasOpened', event);
    };

    /**
     * handles onclose event 4 WSConnect
     * @param event
     * @returns any
     */
    public handleOnClose = async (event: Event) => {
        const { enabled } = this.settings.reconnect;
        if (this.eventCallbacks && this.eventCallbacks.wasClosed) {
            await this.eventCallbacks.wasClosed(event);
            if (enabled) await this.try2Reconnect();
            return true;
        }
        return false;
    };

    /**
     * handles onmessage event 4 WSConnect
     * @param event
     * @returns any
     */
    public handleOnMessage = async (event: any) => {
        return await this.runEventCallback('wasReceived', event);
    };

    /**
     * handles onerror event 4 WSConnect
     * @param {Event} event
     * @returns {Promise<unknown | boolean>}
     */
    public handleOnError = async (event: Event) => {
        return await this.runEventCallback('wasError', event);
    };

    /**
     * runs reconnection automatically if it's enabled via settings
     */
    public try2Reconnect = () => {
        return new Promise(() => {
            const { timeout, increaseTimeout } = this.settings.reconnect;
            this.timerID = setTimeout(async (resolve) => {
                this.socket = await this.init();
                if (increaseTimeout) this.settings.reconnect.timeout = timeout ? timeout + 100 : 100;
                resolve(true);
            }, timeout);
        });
    };

    /**
     * checks if we entered some handler to run event listener
     * @param handlerName
     * @param eventObj
     * @returns
     */
    public runEventCallback = async (handlerName: TCallbackName, eventObj: Event): Promise<boolean | null> => {
        const callback = this.eventCallbacks[handlerName];
        if (callback) {
            await callback(eventObj);
            return true;
        }
        return false;
    };
}

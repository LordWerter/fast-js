import AWSConnect, { TSettings, TEventCallbacks } from './AWSConnect';

export default class WSConnect extends AWSConnect {
    public settings: TSettings = {
        host: {
            protocol: 'ws',
            name: 'localhost:8081',
            url: 'websocket',
        },
        reconnect: {
            enabled: false,
            timeout: 500,
            increaseTimeout: true,
        },
        options: {
            debug: {
                enabled: false,
                checkConfig: true,
                checkNetwork: false,
                checkMsgExchange: false,
            },
            logs: {
                enabled: false,
                mode: 'PROD',
            },
            exitMsg: null,
        },
    };
    public eventCallbacks: TEventCallbacks = {};
    private socket: WebSocket;

    private timerID: any;

    constructor(settings: TSettings, eventCallbacks?: TEventCallbacks) {
        super(settings, eventCallbacks);

        if (!settings && !Object.keys.call(settings.host) && this.settings.options.debug.checkConfig) {
            console.error(`
            Warning! WSConnect was run with defaults. Sometimes we use preloaded core configs from 
            separate backend service via simple GET request. But this service can be unavailable.
            You can enable notices with config validation results to debug this case.
        `);
        }
        this.settings = {
            ...this.settings,
            ...settings,
        };

        this.eventCallbacks = {
            ...eventCallbacks,
        };

        this.socket = this.init();
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
     * sends data object 2 server
     * @param {Object} data
     * @returns {Promise<any>}
     */
    public send = async (data: unknown): Promise<boolean> => {
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

    public exit = async () => {
        const exitMsg =
            !!this.settings.options &&
            !!this.settings.options.exitMsg &&
            Object.keys(this.settings.options.exitMsg).length > 0
                ? this.settings.options.exitMsg
                : null;
        if (!!exitMsg) await this.socket.send(JSON.stringify(this.settings.options.exitMsg));
        await this.socket.close();
        this.settings.reconnect.enabled = false;
        return true;
    };

    /**
     * checks if we entered some handler to run event listener
     * @param handlerName
     * @param eventObj
     * @returns
     */
    private checkAndRunHandler = async (handlerName: string, eventObj: Event): Promise<boolean | null> => {
        const callback = this.eventCallbacks[handlerName];
        if (callback) {
            await callback(eventObj);
            return true;
        }
        return false;
    };
    /**
     * handles onopen event 4 WSConnect
     * @param event
     * @returns any
     */
    private handleOnOpen = async (event: Event) => {
        return await this.checkAndRunHandler('wasOpened', event);
    };

    /**
     * handles onclose event 4 WSConnect
     * @param event
     * @returns any
     */
    private handleOnClose = async (event: Event) => {
        const { enabled } = this.settings.reconnect;
        if (this.eventCallbacks && this.eventCallbacks.wasClosed) {
            await this.eventCallbacks.wasClosed(event);
            if (enabled) await this.try2Reconnect();
            return true;
        }
        return false;
    };

    /**
     * runs reconnection automatically if it's enabled via settings
     */
    private try2Reconnect = () => {
        return new Promise(() => {
            const { timeout, increaseTimeout } = this.settings.reconnect;
            this.timerID = setTimeout(async (resolve) => {
                this.socket = await this.init();
                if (increaseTimeout) this.settings.reconnect.timeout = timeout + 100;
                resolve(true);
            }, timeout);
        });
    };

    /**
     * handles onmessage event 4 WSConnect
     * @param event
     * @returns any
     */
    private handleOnMessage = async (event: any) => {
        const message = JSON.parse(event.data);
        if (this.eventCallbacks && this.eventCallbacks.wasReceived) {
            await this.eventCallbacks.wasReceived(message);
            return true;
        }
        return false;
    };

    /**
     * handles onerror event 4 WSConnect
     * @param event
     * @returns any
     */
    private handleOnError = async (event: Event) => {
        if (this.eventCallbacks && this.eventCallbacks.wasError) {
            await this.eventCallbacks.wasError(event);
            return true;
        }
        return false;
    };

    /**
     * creates native WebSocket Class instance 4 organizing connection with server
     * @returns WebSocket instance
     */
    private createWebSocketConnection(): WebSocket {
        const { protocol, name, url } = this.settings.host;
        return new WebSocket(`${protocol}://${name}/${url}`);
    }

    /**
     * creates ws connection & event listeners for it
     * @returns WebSocket
     */
    private init(): WebSocket {
        const ws = this.createWebSocketConnection();

        ws.addEventListener('open', this.handleOnOpen);
        ws.addEventListener('close', this.handleOnClose);
        ws.addEventListener('message', this.handleOnMessage);
        ws.addEventListener('error', this.handleOnError);
        return ws;
    }
}

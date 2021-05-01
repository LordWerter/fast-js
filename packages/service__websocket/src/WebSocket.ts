import WSAnnotation, {TSettings, TEventCallbacks} from './WSAnnotation';

export default class WebSocketClass extends WSAnnotation {

    public settings : TSettings = {
        host: {
            protocol: 'ws',
            name: 'localhost:8080',
            url: 'websocket',
        },
        doReconnect: true,
        time2Reconnect: 100,
    };
    public eventCallbacks : TEventCallbacks = {};
    private socket : WebSocket;

    constructor(settings : TSettings, eventCallbacks?: TEventCallbacks) {
        super(settings, eventCallbacks);

        this.settings = {
            ...this.settings,
            ...settings
        };
        
        this.eventCallbacks = {
            ...eventCallbacks
        };

        this.socket = this.init();
    }

    /**
	 * get ready state of connection
	 *
	 * @returns number | false
	 */
    public getReadyState = () => {
        return this.socket
            ? this.socket.readyState
            : false;
    }

    /**
     * send data object 2 server
     * @param {Object} data 
     * @returns {Promise<any>}
     */
    public send = async (data: unknown): Promise<unknown | boolean> => {
        if (this.socket) {
            const resData = this.eventCallbacks && this.eventCallbacks.doSend
            ? this.eventCallbacks.doSend(data)
            : data;
            await this.socket.send(JSON.stringify(resData));
            return true;
        }
        return false;
    }

    /**
     * 
     * @param handlerName 
     * @param eventObj 
     * @returns 
     */
    private checkAndRunHandler = async (handlerName: string, eventObj: Event): Promise<boolean | null> => {
        const callback = this.eventCallbacks[handlerName];
        if(callback) return await callback(eventObj);
        return null;
    }
    /**
	 * handle onopen event 4 WSConnection
	 * @param event
	 * @returns any
	 */
    private handleOnOpen = async(event: Event) => {
        return await this.checkAndRunHandler('wasOpened', event);
    }

    /**
	 * handle onclose event 4 WSConnection
	 * @param event
	 * @returns any
	 */
    private handleOnClose = async (event: Event) => {
        const onCloseResult = this.eventCallbacks && this.eventCallbacks.wasClosed
            ? this.eventCallbacks.wasClosed(event)
            : null;
        return onCloseResult;
    }

    /**
	 * handle onmessage event 4 WSConnection
	 * @param event
	 * @returns any
	 */
    private handleOnMessage = async (event: any) => {
        const message = JSON.parse(event.data);
        if (this.eventCallbacks && this.eventCallbacks.wasReceived) {
            this.eventCallbacks.wasReceived(message);
        }
        return true;
    }

    /**
	 * handle onerror event 4 WSConnection
	 * @param event
	 * @returns any
	 */
    private handleOnError = (event: Event) => {
            const {doReconnect, time2Reconnect} = this.settings;
            if (doReconnect) setTimeout(() => {
                this.socket = this.init();
                this.settings.time2Reconnect = this.settings.time2Reconnect + 100;
            }, time2Reconnect);
            
            const onErrorResult = this.eventCallbacks && this.eventCallbacks.wasError ? this
                    .eventCallbacks
                    .wasError(event)
                : null;
            return onErrorResult;
    }

    /**
	 * create native WebSocket Class instance 4 organizing connection with server
	 * @returns WebSocket instance
	 */
    private createWebSocketConnection(): WebSocket {
        const {protocol, name, url} = this.settings.host;
        return new WebSocket(`${protocol}://${name}/${url}`);
    }

    /**
	 * create ws connection & event listeners for it
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

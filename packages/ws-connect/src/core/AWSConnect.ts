/**
 * WSAnnotation Class
 */

export interface IHost {
    protocol : 'ws' | 'wss';
    name : string;
    url: string;
}

export interface IReconnect {
    enabled: false;
    timeout?: number;
    increaseTimeout?: boolean;
}

export interface IDebug {
    enabled: boolean;
    checkConfig?: boolean;
    checkNetwork?: boolean;
    checkMsgExchange?: boolean;
}

export type TLoggerMode = 'DEBUG' | 'DEV' | 'TEST' | 'PROD';

export interface ILogData {
    curMethod: string;
    step: string;
    description: string;
    timeStamp: string;
}

export interface ILogger {
    enabled: boolean;
    mode?: TLoggerMode;
    logFn?: (data: ILogData) => any;
}

export interface IExit {
    enabled: boolean;
    msg2Server: Object | null;
};

export interface IOptions {
    reconnect?: IReconnect;
    debug?: IDebug;
    logs?: ILogger;
    exit?: IExit;
}

export type TSettings = {
    host: IHost;
    reconnect: IReconnect;
    debug: IDebug;
    logs: ILogger;
    exit: IExit;
};

export interface ISettings {
    host?: IHost;
    options?: IOptions;
};

export type TCallback<T> = (data: any) => Promise<T>;

export type TCallbackName = 'wasOpened' | 'wasClosed' | 'wasSent' | 'wasReceived' | 'wasError';

export type TEventCallbacks = {
    wasOpened?: TCallback<boolean>;
    wasClosed?: TCallback<boolean>;
    wasSent?: TCallback<boolean>;
    wasReceived?: TCallback<boolean>;
    wasError?: TCallback<boolean>;
};

export type TClassMethodName = 'getBufferedAmount' | 'getReadyState' | 'send' | 'exit' | 'handleOnOpen' | 'handleOnClose' | 'handleOnMessage' | 'handleOnError' | 'try2Reconnect' | 'runEventCallback';

export type IHandlerResult<T> = Promise<T>;

export type TSendFn = (data: {
    [key : string]: any
}) => Promise<any | boolean>;

export type TMethodFn = () => Promise<boolean>;

export type TWSHandlerFn = (event: Event) => Promise<boolean>;

export default abstract class WSAnnotation {

    public abstract settings : TSettings;
    public abstract eventCallbacks : TEventCallbacks;

    constructor(settings?: ISettings, eventCallbacks?: TEventCallbacks) {}

    public abstract getReadyState: () => number | false;

    public abstract send: TSendFn;

    public abstract exit: TMethodFn;

    public abstract runEventCallback: (handlerName: TCallbackName, eventObj: Event) => Promise<boolean | null>;
}
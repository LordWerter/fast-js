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
    callback?: (data: ILogData) => any;
}

export interface IOptions {
    debug?: IDebug;
    logs?: ILogger;
}

export type TSettings = {
    host?: IHost;
    reconnect?: IReconnect;
    options?: IOptions;
};

export type TCallback<T> = (data: unknown) => Promise<T>;

export type TEventCallbacks = {
    wasOpened?: TCallback<boolean>;
    wasClosed?: TCallback<boolean>;
    wasSent?: TCallback<boolean>;
    wasReceived?: TCallback<boolean>;
    wasError?: TCallback<boolean>;
};

export type IHandlerResult<T> = Promise<T>;

export default abstract class WSAnnotation {

    public abstract settings : TSettings;
    public abstract eventCallbacks : TEventCallbacks;

    constructor(settings: TSettings, eventCallbacks?: TEventCallbacks) {}

    abstract getReadyState: () => number | false;

    abstract send: (data: {
        [key : string]: any
    }) => Promise<any>;

    public abstract exit: () => Promise<boolean>;
}
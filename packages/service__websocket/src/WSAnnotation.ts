/**
 * WSAnnotation Class
 */

export interface IHost {
    protocol : 'ws' | 'wss';
    name : string;
    url: string;
}

export type TSettings = {
    host : IHost;
    doReconnect: boolean;
    time2Reconnect: number;
};

export type TCallback<T> = (data: unknown) => Promise<T>;

export type TEventCallbacks = {
    wasOpened?: TCallback<boolean>;
    wasClosed?: TCallback<boolean>;
    doSend?: TCallback<boolean>;
    wasReceived?: TCallback<boolean>;
    wasError?: TCallback<boolean>;
};

export type IHandlerResult<T> = Promise<T>;

export default abstract class WSAnnotation {

    public abstract settings : TSettings;
    public abstract eventCallbacks : TEventCallbacks;

    constructor(settings: TSettings, eventCallbacks?: TEventCallbacks) {}

    public abstract getReadyState: () => number | false;

    public abstract send: (data: {
        [key : string]: any
    }) => Promise<any>;
}
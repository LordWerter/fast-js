// import Axios from 'axios';
import type { 
    AxiosRequestConfig, 
    AxiosInstance, 
    AxiosResponse, 
    AxiosError 
} from 'axios';

export interface IRequestsConfig {
    hasInterceptors?: boolean;
    localStorageKey?: string;
};

export type TMatchResult = Object | AxiosError | null;

export type TAPIResult = TMatchResult | [] | string | number;

export type TGeneratedFunction = () => Promise<Object | AxiosResponse<TAPIResult> | null>;

export type IInstanseMethod = (config?: AxiosRequestConfig | undefined) => AxiosInstance;

export type TInstanceMethod = <T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig) => Promise<R>;

export type TGeneratingFunction = (params: IGenMethodInput, instanceMethod: IInstanseMethod) => TGeneratedFunction;

export type TGenFuncTemplate = (params: IGenMethodInput, instanceMethod: IInstanseMethod) => Promise<Object | AxiosResponse<TAPIResult> | null>;

export interface IGenFunctions {
    GET: TGeneratingFunction;
    HEAD: TGeneratingFunction;
    POST: TGeneratingFunction;
    PUT: TGeneratingFunction;
    DELETE: TGeneratingFunction;
    CONNECT: TGeneratingFunction;
    OPTIONS: TGeneratingFunction;
    TRACE: TGeneratingFunction;
    PATCH: TGeneratingFunction;
}

export interface IGenMethodInput {
    requestMethod: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
    headers: {};
    host: string;
    url: string;
    queryParams: {[key: string]: number | string | boolean};
    functionKey?: string;
    matchResponseFunction?: (response: TAPIResult) => TMatchResult;
    callbackFunction?: (response: TAPIResult) => Promise<TAPIResult>;
}

export interface IEndPoint extends IGenMethodInput {
}

/**
 * APIClient Class Interface
 * @param reqConfig is object with base configs of API
 * @param endPoints is Array of end-points
 */
export interface IAPIClient {
    reqConfig: Object;
    localStorageKey: string;
    APIMethods:  {[key: string]: TGeneratedFunction};
}

/**
 * APIClient Class Annotation
 */
export abstract class APIClientAnnotation implements IAPIClient {
    public static genFuncTemplate: TGenFuncTemplate;
    public static generatingFunctions: IGenFunctions;
    abstract reqConfig: Object;
    abstract axiosInstance: IInstanseMethod;
    abstract localStorageKey: string;
    abstract APIMethods: {[key: string]: TGeneratedFunction};
    constructor() {}
} 

export default APIClientAnnotation;
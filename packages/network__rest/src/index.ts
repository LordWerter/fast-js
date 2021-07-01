
import APIClientAnnotation, {
  IRequestsConfig, 
  IInstanseMethod, 
  TInstanceMethod, 
  IGenMethodInput, 
  IEndPoint, 
  IGenFunctions, 
  TAPIResult, 
  TGeneratedFunction,
} from './IAPIClient';

import axios from 'axios';
import { AxiosResponse } from 'axios';
/**
 * Class simplifies creation of hash table with all end-point functions
 * @param tag html tag
 * @param content   inner content of created element
 */
export default class ApiClient extends APIClientAnnotation {

  public static genFuncTemplate = (curParams: any, curInstanceMethod: TInstanceMethod) => {
      const {
        url,
        curConfigs,
        matchResponseFunction,
        callbackFunction,
      } = curParams;
      return curInstanceMethod(url, curConfigs).then((result: AxiosResponse<TAPIResult>) => {

          const {data} = result;

          return callbackFunction ? callbackFunction(data).then((resultObj: TAPIResult) => {
            return matchResponseFunction 
            ? matchResponseFunction(resultObj) : result;
          })
          : matchResponseFunction 
          ? matchResponseFunction(data) : result;
        });
  }

  public static generatingFunctions: IGenFunctions = {
      GET: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return ApiClient.genFuncTemplate(params, instanceMethod);
        }
      },
      HEAD: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return ApiClient.genFuncTemplate(params, instanceMethod);
        }
      },
      POST: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return ApiClient.genFuncTemplate(params, instanceMethod);
        }
      },
      PUT: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return ApiClient.genFuncTemplate(params, instanceMethod);
        }
      },
      DELETE: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return ApiClient.genFuncTemplate(params, instanceMethod);
        }
      },
      CONNECT: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return ApiClient.genFuncTemplate(params, instanceMethod);
        }
      },
      OPTIONS: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return ApiClient.genFuncTemplate(params, instanceMethod);
        }
      },
      TRACE: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return ApiClient.genFuncTemplate(params, instanceMethod);
        }
      },
      PATCH: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return ApiClient.genFuncTemplate(params, instanceMethod);
        }
      },
    }

    public reqConfig = {};
    public APIMethods: {[key: string]: TGeneratedFunction} = {};
    private axiosInstance = axios.create;
    private localStorageKey = "token_agent";

  constructor(reqsConfig: IRequestsConfig, endPoints: Array<IEndPoint>) {
    super();
    this.axiosInstance = axios.create;
    this.localStorageKey = reqsConfig.localStorageKey || "token_agent";

    endPoints.map((endPoint: IEndPoint) => {
      const {
        requestMethod,
        host,
        url,
        queryParams,
        headers,
        functionKey,
        matchResponseFunction,
        callbackFunction,
      } = endPoint;
      this.APIMethods[requestMethod] = ApiClient.generatingFunctions[requestMethod]({
        host,
        url,
        requestMethod,
        queryParams,
        headers,
        functionKey,
        matchResponseFunction,
        callbackFunction,
      }, this.axiosInstance);
    });

  }
};

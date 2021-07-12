
import ARESTGen, {
  IRequestsConfig, 
  IInstanseMethod, 
  TInstanceMethod, 
  IGenMethodInput, 
  IEndPoint, 
  IGenFunctions, 
  TAPIResult, 
  TGeneratedFunction,
} from './ARESTGen';

import axios from 'axios';
import { AxiosResponse } from 'axios';
/**
 * Class simplifies creation of hash table with all end-point functions
 * @param tag html tag
 * @param content   inner content of created element
 */
export default class RESTGen extends ARESTGen {

  public genFuncTemplate = (curParams: any, curInstanceMethod: TInstanceMethod) => {
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

  public generatingFunctions: IGenFunctions = {
      GET: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return RESTGen.genFuncTemplate(params, instanceMethod);
        }
      },
      HEAD: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return RESTGen.genFuncTemplate(params, instanceMethod);
        }
      },
      POST: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return RESTGen.genFuncTemplate(params, instanceMethod);
        }
      },
      PUT: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return RESTGen.genFuncTemplate(params, instanceMethod);
        }
      },
      DELETE: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return RESTGen.genFuncTemplate(params, instanceMethod);
        }
      },
      CONNECT: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return RESTGen.genFuncTemplate(params, instanceMethod);
        }
      },
      OPTIONS: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return RESTGen.genFuncTemplate(params, instanceMethod);
        }
      },
      TRACE: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return RESTGen.genFuncTemplate(params, instanceMethod);
        }
      },
      PATCH: (params: IGenMethodInput, instanceMethod: IInstanseMethod) => {
        return () => {
          return RESTGen.genFuncTemplate(params, instanceMethod);
        }
      },
    }

    public reqConfig = {};
    public APIMethods: {[key: string]: TGeneratedFunction} = {};
    private axiosInstance = axios.create;
    private localKey = "token_agent";

  constructor(reqsConfig: IRequestsConfig, endPoints: Array<IEndPoint>) {
    super();
    this.axiosInstance = axios.create;
    this.localKey = reqsConfig.localStorageKey || "token_agent";

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
      this.APIMethods[requestMethod] = RESTGen.generatingFunctions[requestMethod]({
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

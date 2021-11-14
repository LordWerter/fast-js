import {TObject} from './universe';

export interface IEffectPayload {
    mutation: TObject<any>;
    mode?: 'development' | 'production' | null;
    logFn?: (mutation: TObject<any>) => any;
  }
  
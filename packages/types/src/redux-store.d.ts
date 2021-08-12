import {TObject} from './types';

export interface IEffectPayload {
    mutation: TObject<any>;
    mode?: 'development' | 'production' | null;
    logFn?: (mutation: TObject<any>) => any;
  }
  
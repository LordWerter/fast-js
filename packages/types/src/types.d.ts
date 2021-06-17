export interface IMetadataAuthor {
  name: string;
  url: string;
}

export interface IMetadataImage {
  src: string;
  type: string;
  width: string;
  height: string;
  alt: string;
  sizes?: string;
}

export interface IMetadataVideo {
  src: string;
  type: string;
  width: string;
  height: string;
}

export interface IMetadataAudio {
  src: string;
  type: string;
}

export enum IMetadataType {
  NONE = 'NONE',
  FORM_STEP = 'FORM_STEP',
  SECTION = 'SECTION'
}

export interface IMetadata {
  title: string;
  description: string;
  keywords: string;
  h1: string;
	type: IMetadataType;
	images?: IMetadataImage[];
	videos?: IMetadataVideo[];
	audios?: IMetadataAudio[];
}

export interface IListItem {
  id: string;
  value: string | number;
}

export interface IPayload {
  [x: string]: any;
}

export interface IActionMeta {
  [key: string]: any;
}
export interface IAction<P = IPayload, M = IActionMeta> {
  type: string;
  payload: P;
  meta: M;
}

export type TActionCreator = <P = IPayload, M = IActionMeta>(
  type: string,
  basePayload?: any,
  baseMeta?: any,
) => <P1 = {}, M1 = {}>(
  payload: P & P1,
  meta?: M & M1,
) => IAction<P & P1, M & M1>;

export interface IDate {
  day: string;
  month: string;
  year: string;
}

export interface IExchangeRateRequest {
  cash: {
    amount: string,
    currency: 'RUB'
  };
  to: 'BTC';
}

export interface IExchangeRateResponse {
  cash: {
    amount: number,
    currency: 'RUB'
  };
  result: {
    amount: number,
    currency: 'BTC'
  }
}

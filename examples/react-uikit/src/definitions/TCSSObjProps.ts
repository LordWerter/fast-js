import { CSSObject } from "@emotion/react";
import { TSize } from "./TElementProps";

export type TSectionName = 'core' | TSize;

export type TCSSObjProps = {
    [key in TSectionName]: CSSObject;
 };

 export default TCSSObjProps;
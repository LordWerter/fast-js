import { StandardProperties } from "csstype";
import { TSize } from "./TElementProps";

export type TSectionName = 'core' | TSize;

export type NestedSelector = {
    [index: string]: StandardProperties | NestedSelector;
}

export type Properties = StandardProperties | NestedSelector;

export type TCSSObjProps = {
    [key in TSectionName]: Properties;
 };

 export default TCSSObjProps;
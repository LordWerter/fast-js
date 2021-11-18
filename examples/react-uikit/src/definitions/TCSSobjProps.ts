import { StandardProperties as Properties } from "csstype";
import { TSize } from "./TElementProps";

export type TSectionName = 'core' | TSize;

export type TCSSObjProps = {
    [key in TSectionName]: Properties;
 };

 export default TCSSObjProps;
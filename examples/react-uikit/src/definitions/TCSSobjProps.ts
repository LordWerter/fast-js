import { StandardLonghandProperties } from "csstype";
import { TSize } from "./TElementProps";

export type TSectionName = 'core' | TSize;

export type IBlocks = {
    [key in TSectionName]: StandardLonghandProperties;
 };

 export default IBlocks;
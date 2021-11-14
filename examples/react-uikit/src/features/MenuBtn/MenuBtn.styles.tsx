import styled from "@emotion/styled";
import { TElementProps } from "../../definitions";
import { getCSSObj } from "../../utils";

export type TCWrapProps = TElementProps;

export const CWrap = styled.div<TCWrapProps>`
${getCSSObj}
`;

export type TLineProps = TElementProps;

export const Line = styled.div<TLineProps>`
${getCSSObj}
`;
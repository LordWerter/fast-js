import styled from "@emotion/styled";
import { TElementProps } from "../../definitions";
import { getCSSObj } from "../../utils";

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
    ${getCSSObj}
`;

export type TLineProps = TElementProps;

export const Line = styled.div<TLineProps>`
    ${getCSSObj}
`;
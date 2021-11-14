import styled from "@emotion/styled";
import { TElementProps } from "../../definitions";
import { getCSSObj } from "../../utils";

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
    ${getCSSObj}
`;

export type ISeparatorMiddleProps = TElementProps;

export const SeparatorMiddle = styled.div<ISeparatorMiddleProps>`
    ${getCSSObj}
`;
import styled from '@emotion/styled';
import { TElementProps } from '../../definitions';
import { getCSSObj } from '../../utils';

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
${getCSSObj}
`;

export type IImgProps = TElementProps;

export const Img = styled.img<IImgProps>`
${getCSSObj}
`;

export type IRightArrowProps = TElementProps;

export const RightArrow = styled.div<IRightArrowProps>`
${getCSSObj}
`;

export type ILeftArrowProps = TElementProps;

export const LeftArrow = styled.div<ILeftArrowProps>`
${getCSSObj}
`;

export type IDotsWrapProps = TElementProps;

export const DotsWrap = styled.div<IDotsWrapProps>`
${getCSSObj}
`;

export type IDotsProps = TElementProps;

export const Dots = styled.div<IDotsProps>`
${getCSSObj}
`;
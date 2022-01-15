import styled from '@emotion/styled';
import {getCSSObj} from '../../../../utils';
import {TElementProps} from '../../../../definitions';

export type TCWrapProps = TElementProps;

export const CWrap = styled.div<TCWrapProps>`
  ${getCSSObj}
`;

export type TTrackProps = TElementProps;

export const Track = styled.div<TTrackProps>`
  ${getCSSObj}
`;

export type TSlideProps = TElementProps;

export const Slide = styled.div<TSlideProps>`
  ${getCSSObj}
`;

export type TArrowProps = TElementProps;

export const Arrow = styled.div<TArrowProps>`
  ${getCSSObj}
`;

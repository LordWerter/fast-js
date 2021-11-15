import styled from '@emotion/styled';
import {getCSSObj} from '../../utils';
import {TElementProps} from '../../definitions';

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
  ${getCSSObj}
`;

export type TLogoProps = ICWrapProps;

export const Logo = styled.div<TLogoProps>`
  ${getCSSObj}
`;

export type TMenuWrapProps = ICWrapProps & {
  children?: any;
};

export const MenuWrap = styled.div<TMenuWrapProps>`
  ${getCSSObj}
`;
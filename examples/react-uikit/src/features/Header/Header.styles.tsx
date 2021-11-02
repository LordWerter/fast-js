import styled from '@emotion/styled';
import {getCSSObj} from '../../utils';
import {TElementProps} from '../../definitions';

export type ICWrapProps = TElementProps;

export const CWrap = styled.header<ICWrapProps>`
  ${getCSSObj}
`;

export type TLogoProps = ICWrapProps;

export const Logo = styled.div<TLogoProps>`
  ${getCSSObj}
`;

export type TNavBarProps = ICWrapProps;

export const NavBar = styled.div<TNavBarProps>`
  ${getCSSObj}
`;

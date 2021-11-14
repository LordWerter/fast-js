import styled from '@emotion/styled';
import {getCSSObj} from '../../utils';
import {THTMLElementProps} from '../../definitions';

export type TCWrapProps = THTMLElementProps;

export const CWrap = styled.div<TCWrapProps>`
  ${getCSSObj}
`;

export type TSectionContentProps = THTMLElementProps;

export const SectionContent = styled.div<TSectionContentProps>`
  ${getCSSObj}
`;

export type TCharacterImgWrapProps = THTMLElementProps;

export const CharacterImgWrap = styled.div<TCharacterImgWrapProps>`
  ${getCSSObj}
`;

export type TTitleProps = THTMLElementProps;

export const Title = styled.h2<TTitleProps>`
  ${getCSSObj}
`;

export type TDescriptionProps = THTMLElementProps;

export const Description = styled.p<TDescriptionProps>`
  ${getCSSObj}
`;

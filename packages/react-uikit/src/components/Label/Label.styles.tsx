import styled from '@emotion/styled';
import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export type IWrapperProps = ICWrapProps;

export type IPrefixProps = ICWrapProps;

export type IPostfixProps = ICWrapProps;

export type ILineProps = ICWrapProps;

export const CWrap = styled.div<IWrapperProps>`
    ${getResultStyles}
`;

export const Line = styled.div<ILineProps>`
    ${getResultStyles}
`;

export const Prefix = styled.span<IPrefixProps>`
    ${getResultStyles}
`;

export const Postfix = styled.span<IPostfixProps>`
    ${getResultStyles}
`;

import styled from '@emotion/styled';

import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export interface IWrapperProps extends ICWrapProps {
}

export interface IPrefixProps extends ICWrapProps {
}

export interface IPostfixProps extends ICWrapProps {
}

export interface ILineProps extends ICWrapProps {
}

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

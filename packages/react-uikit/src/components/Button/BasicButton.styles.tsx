import styled from '@emotion/styled';

import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export interface IWrapperProps extends ICWrapProps {
}

export interface IIconProps extends ICWrapProps {
}

export interface ICaptionProps extends ICWrapProps {
}

export const CWrap = styled.button<IWrapperProps>`
    ${getResultStyles}
`;

export const IconWrap = styled.div<IIconProps>`
    ${getResultStyles}
`;

export const Caption = styled.span<ICaptionProps>`
    ${getResultStyles}
`;

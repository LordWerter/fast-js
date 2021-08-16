import styled from '@emotion/styled';
import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export type IWrapperProps = ICWrapProps;

export type IIconProps = ICWrapProps;

export type ICaptionProps = ICWrapProps;

export const CWrap = styled.button<IWrapperProps>`
    ${getResultStyles}
`;

export const IconWrap = styled.div<IIconProps>`
    ${getResultStyles}
`;

export const Caption = styled.span<ICaptionProps>`
    ${getResultStyles}
`;

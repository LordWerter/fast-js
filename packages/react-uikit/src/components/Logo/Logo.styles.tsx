import styled from '@emotion/styled';
import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export type IWrapperProps = ICWrapProps;

export type IIconProps = ICWrapProps;

export type ITextProps = ICWrapProps;

export const CWrap = styled.div<IWrapperProps>`
    display: flex;
    ${getResultStyles}
`;

export const Image = styled.div<IIconProps>`
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    ${getResultStyles}
`;

export const Text = styled.div<ITextProps>`
    ${getResultStyles}
`;

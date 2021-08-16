import styled from '@emotion/styled';
import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export type IWrapperProps = ICWrapProps;

export const CWrap = styled.div<IWrapperProps>`
    ${getResultStyles}
`;

export type ISelectedItemProps = ICWrapProps;

export const SelectedItem = styled.div<ISelectedItemProps>`
    ${getResultStyles}
`;

export type IItemProps = ICWrapProps;

export const Item = styled.div<IItemProps>`
    ${getResultStyles}
`;

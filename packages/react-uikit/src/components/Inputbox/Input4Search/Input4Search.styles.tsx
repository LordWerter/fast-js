import styled from '@emotion/styled';
import { ICWrapProps } from '../../../definitions/IPropTypes';
import { getResultStyles } from '../../../utils';

export type IWrapperProps = ICWrapProps;

export const CWrap = styled.div<IWrapperProps>`
    ${getResultStyles}
`;

export type ISearchBtnProps = ICWrapProps;

export const SearchBtn = styled.div<ISearchBtnProps>`
    ${getResultStyles}
`;

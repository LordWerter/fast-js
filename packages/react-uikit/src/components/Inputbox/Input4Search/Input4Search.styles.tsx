import styled from '@emotion/styled';

import { ICWrapProps } from '../../../definitions/IPropTypes';
import { getResultStyles } from '../../../utils';

export interface IWrapperProps extends ICWrapProps {
}

export const CWrap = styled.div<IWrapperProps>`
    ${getResultStyles}
`;

export interface ISearchBtnProps extends ICWrapProps {
}

export const SearchBtn = styled.div<ISearchBtnProps>`
    ${getResultStyles}
`;

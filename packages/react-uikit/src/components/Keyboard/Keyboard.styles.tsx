import styled from '@emotion/styled';

import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export interface IWrapperProps extends ICWrapProps {
}

export interface IBoardProps extends ICWrapProps {
    activeBoard: string;
    key: string;
}

export interface IRowProps extends ICWrapProps {
}

export const CWrap = styled.div<IWrapperProps>`
    ${getResultStyles}
`;

export const Board = styled.div<IBoardProps>`
    display: flex;
    flex-direction: column;
    ${getResultStyles}
`;

export const Row = styled.div<IRowProps>`
    display: flex;
    align-items: stretch;
    justify-content: center;

    box-sizing: border-box;
    ${getResultStyles}
`;

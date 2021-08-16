import styled from '@emotion/styled';
import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export type IWrapperProps = ICWrapProps;

export const CWrap = styled.div<IWrapperProps>`
    ${getResultStyles}
`;

export interface IBoardProps extends ICWrapProps {
    activeBoard: string;
    key: string;
}

export const Board = styled.div<IBoardProps>`
    display: flex;
    flex-direction: column;
    ${getResultStyles}
`;

export type IRowProps = ICWrapProps;

export const Row = styled.div<IRowProps>`
    display: flex;
    align-items: stretch;
    justify-content: center;

    box-sizing: border-box;
    ${getResultStyles}
`;

import styled from '@emotion/styled';
import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export type IWrapperProps = ICWrapProps;

export type IButtonProps = ICWrapProps;

export type IValueProps = ICWrapProps;

export const CWrap = styled.div<IWrapperProps>`
    display: flex;
    align-items: stretch;
    justify-content: center;
    height: 92px;
    width: min-content;
    border-radius: 10px;
    overflow: hidden;

    ${getResultStyles}
`;

export const Value = styled.div<IValueProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    box-sizing: border-box;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    font-size: 24px;

    ${getResultStyles}
`;

export const Btn = styled.button<IButtonProps>`
    border-radius: 50%;
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    ${getResultStyles}
`;

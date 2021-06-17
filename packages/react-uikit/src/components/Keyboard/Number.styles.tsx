import styled from '@emotion/styled';

import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export interface IWrapperProps extends ICWrapProps {
}

export interface IRowProps extends ICWrapProps {
}

export interface IKeyProps extends ICWrapProps {
}

export const CWrap = styled.div<IWrapperProps>`
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
    ${getResultStyles}
`;

export const Row = styled.div<IRowProps>`
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    padding: 20px 0;

    box-sizing: border-box;
    ${getResultStyles}

`;

export const Key = styled.button<IKeyProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    border-radius: 0;
    border: none;
    background: transparent;

    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    width: 210px;
    height: 150px;
    margin: 0 20px;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    ${getResultStyles}

`;

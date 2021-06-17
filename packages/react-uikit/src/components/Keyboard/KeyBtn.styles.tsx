import styled from '@emotion/styled';

import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export interface IWrapperProps extends ICWrapProps {
    keyWidth: number;
    code: string;
}


export const CWrap = styled.button<IWrapperProps>`
    display: ${(props) => (props.code ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    width: ${(props) => props.keyWidth}%;

    color: #175F25;
    border-radius: 15px;
    border: none;
    background: transparent;

    font-style: normal;
    font-weight: bold;
    font-size: 40px;
        box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
        border-radius: 15px;

    ${getResultStyles}
`;

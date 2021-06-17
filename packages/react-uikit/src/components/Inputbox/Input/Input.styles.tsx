import styled from '@emotion/styled';

import { ICWrapProps } from '../../../definitions/IPropTypes';
import { getResultStyles } from '../../../utils';

export interface IWrapperProps extends ICWrapProps {
}

export const CWrap = styled.div<IWrapperProps>`
    position: relative;
    overflow: hidden;
    ${getResultStyles}
`;

export interface ILabelProps extends ICWrapProps {
}

export const Label = styled.div<ILabelProps>`
    display: flex;
    flex-direction: column;
    ${getResultStyles}
`;

export interface IInputWrapProps extends ICWrapProps {
}

export const InputWrap = styled.div<IInputWrapProps>`
    ${getResultStyles}
`;

export interface IInpitProps extends ICWrapProps {
}

export const InputBox = styled.input<IInpitProps>`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    border: none;
    ${getResultStyles}
`;

export interface IPlaceholderProps extends ICWrapProps {
}

export const Placeholder = styled.div<IPlaceholderProps>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    display: flex;
    align-items: center;
    border: none;
    ${getResultStyles}
`;

export interface INoticeProps extends ICWrapProps {
}

export const Notice = styled.div<INoticeProps>`
    ${getResultStyles}
`;
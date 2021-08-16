import styled from '@emotion/styled';
import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export interface IWrapperProps extends ICWrapProps {
    color4Active: any;
}

export type IIconProps = ICWrapProps;

export type ILabelProps = ICWrapProps;

export const IconBox = styled.div<IIconProps>`
    position: relative;
    align-self: flex-start;
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
    box-sizing: border-box;
    border: 3px solid;
    ${getResultStyles}
`;

export const CWrap = styled.div<IWrapperProps>`
    padding: 2px 0;
    display: flex;
    align-items: center;
    transition: all 0.2s;
    ${getResultStyles}

    &:hover div:first-of-type {
        border-color: ${(props) => props.color4Active};
    }
`;

export const Input = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    z-index: -1;
`;

export const Label = styled.label<ILabelProps>`
    font-size: 32px;
    ${getResultStyles}
`;

import styled from '@emotion/styled';

import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export interface IWrapperProps extends ICWrapProps {
}

export interface IMainBtnProps extends ICWrapProps {
}

export interface ILabelProps extends ICWrapProps {
}

export interface IListProps extends ICWrapProps {
    isVisible: boolean;
}

export interface ILabelImgProps extends ICWrapProps {
    imageId: boolean;
}

export interface ILabelTextProps extends ICWrapProps {
    hasImage: boolean;
}

export const List = styled.div<IListProps>`
    position: absolute;
    z-index: 1;
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    bottom: 0px;
    left: 0;
    right: 0;
    flex-direction: column;
    padding-bottom: 96px;
    ${getResultStyles}
`;
export const CWrap = styled.div<IWrapperProps>`
    position: relative;
    ${getResultStyles}
`;

export const MainBtn = styled.div<IMainBtnProps>`
    position: relative;
    z-index: 2;
    ${getResultStyles}
`;

export const Label = styled.button<ILabelProps>`
    display: flex;
    position: relative;
    z-index: 2;
    align-items: center;

    border: none;
    border-radius: 0px;
    width: 100%;
    height: 96px;

    padding: 0 50px;

    font-style: normal;
    font-weight: 900;
    font-size: 22px;

    text-align: center;

    box-sizing: border-box;

    outline: none;

    background: #292b36;
    color: #fff;
    margin: 0;
    justify-content: center;
    ${getResultStyles}
`;

export const LabelImg = styled.span<ILabelImgProps>`
    width: 30%;
    height: 76px;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    ${getResultStyles}
`;

export const LabelText = styled.span<ILabelTextProps>`
    width: ${(props) => (props.hasImage ? '70%' : '100%')};
    line-height: 1.2;
    ${getResultStyles}
`;

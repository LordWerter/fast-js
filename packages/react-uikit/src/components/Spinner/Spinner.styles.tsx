import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export type IWrapperProps = ICWrapProps;

export type IImageWrapProps = ICWrapProps;

export type ICircleProps = ICWrapProps;

export type IClockImgProps = ICWrapProps;

export type ILoadingTextProps = ICWrapProps;

export const CWrap = styled.div<IWrapperProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${getResultStyles}
`;

export const Title = styled.div<IImageWrapProps>`
    ${getResultStyles}
`;
export const ImageWrap = styled.div<IImageWrapProps>`
    display: flex;
    width: 380px;
    height: 380px;
    position: relative;

    ${getResultStyles}
`;

export const rotate = keyframes`
  from, to {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Circle = styled.span<ICircleProps>`
    animation: ${rotate} 4s linear infinite;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;

    ${getResultStyles}
`;

export const ClockImg = styled.span<ICircleProps>`
    background-position: center;
    background-size: 20%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    ${getResultStyles}
`;

export const LoadingText = styled.span<ILoadingTextProps>`
    ${getResultStyles}
`;

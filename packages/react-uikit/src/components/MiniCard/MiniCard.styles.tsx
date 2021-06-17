import styled from '@emotion/styled';

import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export interface IWrapperProps extends ICWrapProps {
}

export const CWrap = styled.div<IWrapperProps>`
    ${getResultStyles}
`;

export interface IImageProps extends ICWrapProps {
    imageId: string;
}

export const Image = styled.div<IImageProps>`
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    ${getResultStyles}
`;

export interface ITitleProps extends ICWrapProps {
}

export const Title = styled.div<ITitleProps>`
    ${getResultStyles}
`;

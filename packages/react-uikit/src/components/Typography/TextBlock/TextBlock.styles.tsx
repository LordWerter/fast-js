import styled from '@emotion/styled';
import { ICWrapProps } from '../../../definitions/IPropTypes';

export type ITextBlockProps = ICWrapProps;

export const H1 = styled.h1<ITextBlockProps>`
    ${(props: ITextBlockProps) => {
        return {
            ...props.theme.core,
            ...props.theme[props.sizeId],
        };
    }}
`;

export const H2 = styled.h2<ITextBlockProps>`
    ${(props: ITextBlockProps) => {
        return {
            ...props.theme.core,
            ...props.theme[props.sizeId],
        };
    }}
`;

export const H3 = styled.h3<ITextBlockProps>`
    ${(props: ITextBlockProps) => {
        return {
            ...props.theme.core,
            ...props.theme[props.sizeId],
        };
    }}
`;

export const H4 = styled.h4<ITextBlockProps>`
    ${(props: ITextBlockProps) => {
        return {
            ...props.theme.core,
            ...props.theme[props.sizeId],
        };
    }}
`;

export const H5 = styled.h5<ITextBlockProps>`
    ${(props: ITextBlockProps) => {
        return {
            ...props.theme.core,
            ...props.theme[props.sizeId],
        };
    }}
`;

export const H6 = styled.h6<ITextBlockProps>`
    ${(props: ITextBlockProps) => {
        return {
            ...props.theme.core,
            ...props.theme[props.sizeId],
        };
    }}
`;

export const P = styled.p<ITextBlockProps>`
    ${(props: ITextBlockProps) => {
        return {
            ...props.theme.core,
            ...props.theme[props.sizeId],
        };
    }}
`;

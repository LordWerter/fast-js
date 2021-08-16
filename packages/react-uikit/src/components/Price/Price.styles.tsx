import styled from '@emotion/styled';
import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export type IWrapperProps = ICWrapProps;
export const CWrap = styled.div<IWrapperProps>`
    ${getResultStyles}
`;

export type IIntValueProps = ICWrapProps;
export const IntValue = styled.span<IIntValueProps>`
    ${getResultStyles}
`;

export type IDelimiterProps = ICWrapProps;
export const Delimiter = styled.span<IDelimiterProps>`
    ${getResultStyles}
`;

export type IFractionValueProps = ICWrapProps;
export const FractionValue = styled.span<IFractionValueProps>`
    ${getResultStyles}
`;

export type IСurrencyProps = ICWrapProps;
export const Сurrency = styled.span<IСurrencyProps>`
    ${getResultStyles}
`;

export type ILineProps = ICWrapProps;
export const Line = styled.span<ILineProps>`
    ${getResultStyles}
`;

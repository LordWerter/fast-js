import styled from '@emotion/styled';

import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export interface IWrapperProps extends ICWrapProps {
}
export const CWrap = styled.div<IWrapperProps>`
    ${getResultStyles}
`;



export interface IIntValueProps extends ICWrapProps {
}
export const IntValue = styled.span<IIntValueProps>`
    ${getResultStyles}
`;



export interface IDelimiterProps extends ICWrapProps {
}
export const Delimiter = styled.span<IDelimiterProps>`
    ${getResultStyles}
`;



export interface IFractionValueProps extends ICWrapProps {
}
export const FractionValue = styled.span<IFractionValueProps>`
    ${getResultStyles}
`;



export interface IСurrencyProps extends ICWrapProps {
}
export const Сurrency = styled.span<IСurrencyProps>`
    ${getResultStyles}
`;



export interface ILineProps extends ICWrapProps {
}
export const Line = styled.span<ILineProps>`
    ${getResultStyles}
`;

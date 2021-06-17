import styled from '@emotion/styled';

import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export interface IWrapperProps extends ICWrapProps {
}

export const CWrap = styled.div<IWrapperProps>`

    ${getResultStyles}
`;

export interface ISelectedItemProps extends ICWrapProps {
}

export const SelectedItem = styled.div<ISelectedItemProps>`

    ${getResultStyles}
`;

export interface IItemProps extends ICWrapProps {
}

export const Item = styled.div<IItemProps>`

    ${getResultStyles}
`;

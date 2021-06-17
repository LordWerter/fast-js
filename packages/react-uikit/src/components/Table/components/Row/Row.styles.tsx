import styled from '@emotion/styled';

import { ICWrapProps } from '../../../../definitions/IPropTypes';

export interface ICRowProps extends ICWrapProps {
}

export interface ICeilProps extends ICWrapProps {
    width: string;
}

export const CWrap = styled.div<ICRowProps>``;

export const Ceil = styled.div<ICeilProps>``;

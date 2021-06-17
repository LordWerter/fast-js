import styled from '@emotion/styled';


import { ICWrapProps } from '../../definitions/IPropTypes';
import { getResultStyles } from '../../utils';

export interface IWrapperProps extends ICWrapProps {
    isEnabled?: boolean;
    isDisabled?: boolean;
}

export interface IRollerProps extends ICWrapProps {
    isEnabled?: boolean;
    isDisabled?: boolean;
}

export const CWrap = styled.div<IWrapperProps>`
    ${getResultStyles}

    :hover {
        ${(props) => {
            return getResultStyles(props, 'isHover')
        }}
    }
`;

export const Roller = styled.div<IRollerProps>`
    ${getResultStyles}

`;

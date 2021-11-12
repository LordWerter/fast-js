import styled from '@emotion/styled';
import {getCSSObj} from '../../utils';
import {TElementProps} from '../../definitions';

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
  ${getCSSObj}
`;

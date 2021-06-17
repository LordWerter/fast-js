import React from 'react';

export interface IProps {
    sizeId,
    ceils,
}

import { CWrap, Ceil } from './Row.styles';

export const Row: React.FC<IProps> = ({
    sizeId,
    ceils,
  }) => {
    return (
      <CWrap sizeId={sizeId}>
          {ceils.map(({width, value}, index) => <Ceil key={index} width={width} sizeId={sizeId}>
              { value }
              </Ceil>)}
      </CWrap>
    )
  }

export default Row;

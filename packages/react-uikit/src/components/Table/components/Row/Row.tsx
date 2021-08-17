/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { TSize } from '../../../../definitions/IPropTypes';

export interface IProps {
    sizeId?: TSize;
    ceils: any;
}

import { CWrap, Ceil } from './Row.styles';

export const Row: React.FC<IProps> = ({ sizeId, ceils }) => {
    return (
        <CWrap sizeId={sizeId}>
            {ceils.map(({ width, value }, index: number) => (
                <Ceil key={index} width={width} sizeId={sizeId}>
                    {value}
                </Ceil>
            ))}
        </CWrap>
    );
};

export default Row;

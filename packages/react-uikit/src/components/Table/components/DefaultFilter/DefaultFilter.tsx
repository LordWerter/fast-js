/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React, { ChangeEvent } from 'react';
import { TSize } from '../../../../definitions/IPropTypes';

export interface IProps {
    sizeId?: TSize;
    column: {
        filterValue: any;
        preFilteredRows: any;
        setFilter: any;
    };
}

import InputBox from '../../../Inputbox/Input';

export const DefaultColumnFilter: React.FC<IProps> = ({
    sizeId,
    column: { filterValue, preFilteredRows, setFilter },
}) => {
    const count = preFilteredRows.length;

    return (
        <InputBox
            sizeId={sizeId}
            value={filterValue || ''}
            placeholder={`Search ${count} records...`}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setFilter(event.target.value || undefined); // Set undefined to remove the filter entirely
            }}
        />
    );
};

export default DefaultColumnFilter;

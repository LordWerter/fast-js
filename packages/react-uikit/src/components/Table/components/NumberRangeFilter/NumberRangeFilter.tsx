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
        id: any;
    };
}

import { default as InputBox } from '../../../Inputbox/Input';
import { CWrap } from './NumberRangeFilter.styles';

export const NumberRangeColumnFilter: React.FC<IProps> = ({
    sizeId,
    column: { filterValue = [], preFilteredRows, setFilter, id },
}) => {
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        preFilteredRows.forEach((row: any) => {
            min = Math.min(row.values[id], min);
            max = Math.max(row.values[id], max);
        });
        return [min, max];
    }, [id, preFilteredRows]);

    return (
        <CWrap>
            <InputBox
                sizeId={sizeId}
                value={filterValue[0] || ''}
                placeholder={`Min (${min})`}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const val = event.target.value;
                    setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]]);
                }}
            />
            <InputBox
                sizeId={sizeId}
                value={filterValue[1] || ''}
                placeholder={`Max (${max})`}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const val = event.target.value;
                    setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined]);
                }}
            />
        </CWrap>
    );
};

export default NumberRangeColumnFilter;

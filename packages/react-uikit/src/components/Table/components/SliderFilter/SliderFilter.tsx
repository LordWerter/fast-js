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

export const SliderColumnFilter: React.FC<IProps> = ({
    // size,
    column: { filterValue, setFilter, preFilteredRows, id },
}) => {
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        preFilteredRows.forEach((row) => {
            min = Math.min(row.values[id], min);
            max = Math.max(row.values[id], max);
        });
        return [min, max];
    }, [id, preFilteredRows]);

    return (
        <>
            <input
                type='range'
                min={min}
                max={max}
                value={filterValue || min}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFilter(parseInt(event.target.value, 10));
                }}
            />
            <button onClick={() => setFilter(undefined)}>Off</button>
        </>
    );
};

export default SliderColumnFilter;

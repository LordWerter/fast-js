import React, { ChangeEvent } from 'react';

export interface IProps {
    sizeId,
    column: {
        filterValue: any;
        preFilteredRows: any;
        setFilter: any;
    }
}

import { Inputbox as InputBox } from '../../../Inputbox';

export const DefaultColumnFilter: React.FC<IProps> = ({
    sizeId,
    column: { filterValue, preFilteredRows, setFilter },
  }) => {
    const count = preFilteredRows.length
  
    return (
      <InputBox
        sizeId={sizeId}
        value={filterValue || ''}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setFilter(event.target.value || undefined) // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    )
}

export default DefaultColumnFilter;

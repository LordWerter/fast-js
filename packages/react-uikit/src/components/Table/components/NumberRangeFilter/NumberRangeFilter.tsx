import React, { ChangeEvent } from 'react';

export interface IProps {
    sizeId,
    column: {
        filterValue: any;
        preFilteredRows: any;
        setFilter: any;
        id: any;
    }
}

import { Inputbox as InputBox } from '../../../Inputbox';

import { CWrap } from './NumberRangeFilter.styles';

export const NumberRangeColumnFilter: React.FC<IProps> = ({
    sizeId,
    column: { filterValue = [], preFilteredRows, setFilter, id },
  }) => {
    const [min, max] = React.useMemo(() => {
      let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
      let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
      preFilteredRows.forEach(row => {
        min = Math.min(row.values[id], min)
        max = Math.max(row.values[id], max)
      })
      return [min, max]
    }, [id, preFilteredRows])
  
    return (
      <CWrap>
        <InputBox
          sizeId={sizeId}
          value={filterValue[0] || ''}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const val = event.target.value
            setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
          }}
          placeholder={`Min (${min})`}
        />
        <InputBox
          sizeId={sizeId}
          value={filterValue[1] || ''}
          onChange={e => {
            const val = e.target.value
            setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
          }}
          placeholder={`Max (${max})`}
        />
      </CWrap>
    )
  }

export default NumberRangeColumnFilter;

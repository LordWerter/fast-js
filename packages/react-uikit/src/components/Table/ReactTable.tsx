import React from 'react';
import { useTable, useSortBy, useFilters, useColumnOrder } from 'react-table';
import { motion, AnimatePresence } from 'framer-motion';
import { matchSorter } from 'match-sorter';

export interface IProps { 
  columns: any;
  data: any;
}

import { DefaultFilter } from './components';
import { CWrap, Header, Body } from './ReactTable.styles';

export const ReactTable: React.FC<IProps> = ({ columns, data }): JSX.Element => {
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useColumnOrder,
    useFilters,
    useSortBy
  )

  const spring = React.useMemo(
    () => ({
      type: 'spring',
      damping: 50,
      stiffness: 100,
    }),
    []
  )

  return <CWrap {...getTableProps()}>
      <Header>
      {headerGroups.map((headerGroup) => (
        <div {...headerGroup.getHeaderGroupProps()}>

          {headerGroup.headers.map(column => (
                <motion.div
                  {...column.getHeaderProps({
                    layoutTransition: spring,
                    style: {
                      minWidth: column.minWidth,
                    },
                  })}
                >
                  <div {...column.getSortByToggleProps()}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </div>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </motion.div>
              ))}
            </div>
          ))}
      </Header>
      <Body {...getTableBodyProps()}>
      <AnimatePresence>
            {rows.slice(0, 10).map((row) => {
              prepareRow(row)
              return (
                <motion.tr
                  {...row.getRowProps({
                    layoutTransition: spring,
                    exit: { opacity: 0, maxHeight: 0 },
                  })}
                >
                  {row.cells.map((cell) => {
                    return (
                      <motion.td
                        {...cell.getCellProps({
                          layoutTransition: spring,
                        })}
                      >
                        {cell.render('Cell')}
                      </motion.td>
                    )
                  })}
                </motion.tr>
              )
            })}
          </AnimatePresence>

      </Body>
    </CWrap>;
};

export default ReactTable;


function fuzzyTextFilterFn(rows, id, filterValue) {
  //@ts-ignore
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id]
    return rowValue >= filterValue
  })
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== 'number'

import React from 'react';

export interface IProps {
    size;
    column: {
        filterValue: any;
        preFilteredRows: any;
        setFilter: any;
        id: any;
    };
}

export const SelectColumnFilter: React.FC<IProps> = (props) => {
    // Render a multi-select box
    return <></>;
};

export default SelectColumnFilter;

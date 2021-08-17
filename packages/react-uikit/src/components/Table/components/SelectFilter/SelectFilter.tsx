import React from 'react';
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

export const SelectColumnFilter: React.FC<IProps> = () => {
    // Render a multi-select box
    return <></>;
};

export default SelectColumnFilter;

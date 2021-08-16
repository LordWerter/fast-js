/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { TSize } from '../../definitions/IPropTypes';

export interface IProps {
    defaultItem: any;
    sizeId?: TSize;
    customize?: any;
    data?: any;
}

import { CWrap, SelectedItem, Item } from './Dropbox.styles';
/**
 * imports of utils
 */
import { mergeThemeObjects } from '../../utils';

export const Dropbox: React.FC<IProps> = (props): JSX.Element => {
    const { defaultItem, data, sizeId = 'xl', customize = {}, children } = props;

    const [selectedItem, setSelectedItem] = useState(defaultItem);

    // @ts-ignore
    const theme = { ...useTheme().components.Counter } || {};
    const requiredThemeKeys = ['container', 'selecteditem', 'item', 'images'];
    for (const key in requiredThemeKeys) {
        const curKey = requiredThemeKeys[key];
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    }

    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            <SelectedItem sizeId={sizeId} theme={theme.selecteditem}>
                {selectedItem.text}
            </SelectedItem>
            {data.map((item: any, index: any) => (
                <Item
                    key={index}
                    sizeId={sizeId}
                    theme={theme.item}
                    onClick={() => {
                        const curItem = { ...item };
                        setSelectedItem(curItem);
                    }}>
                    {item.text}
                </Item>
            ))}
            {children}
        </CWrap>
    );
};

export default Dropbox;

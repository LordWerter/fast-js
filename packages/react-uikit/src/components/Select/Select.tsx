import React, { useState } from 'react';
import { useTheme } from '@emotion/react';

import { List, CWrap, MainBtn, Label, LabelText } from './Select.styles';
import Image from '../Image';
/**
 * imports of utils
 */
import {mergeThemeObjects} from '../../utils';


export const Select: React.FC<any> = (props): JSX.Element => {
    const { sizeId = 'xl', customize = {}, labelImg, labelText, items } = props;

    const [lblImg, setLabelImg] = useState(labelImg);
    const [listVisibility, setListVisibility] = useState(false);

    const handleListVisibility = (event, status?) => {
        status !== undefined ? setListVisibility(status) : setListVisibility(!listVisibility);
    };

    //@ts-ignore
    const theme: {[key in string]: any} = { ...useTheme().components.Select };
    if (typeof(theme) === 'object') {
        for (let key in theme) {
            theme[key] = mergeThemeObjects(theme[key], customize[key]);
        }
    }


    console.log(theme.labelImg);
    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.container}
        >
            <MainBtn
                sizeId={sizeId}
                theme={theme.mainBtn}
            >
                <Label
                    sizeId={sizeId}
                    theme={theme.label}
                    onClick={handleListVisibility}>
                    <Image
                        sizeId={sizeId}
                        customize={theme.labelImg}
                        bgImage={theme.images[lblImg]}
                        />
                    <LabelText
                        sizeId={sizeId}
                        theme={theme.labelText}
                        hasImage={!!lblImg}
                    >{labelText}</LabelText>
                </Label>
            </MainBtn>
            <List
                sizeId={sizeId}
                theme={theme.list}
                isVisible={listVisibility}>
                {items.map((item, index) => {
                    return (
                    <Label
                        sizeId={sizeId}
                        theme={theme.label}
                        key={index}
                        onClick={(event) => {
                            const id = item.id;
                            const handler = item.handler;
                            setLabelImg(id);
                            id ? handler(id) : handler();
                            handleListVisibility(event, false);
                        }}>
                            {item.iconVisibility ? <Image
                                sizeId={sizeId}
                                customize={theme.labelImg}
                                bgImage={theme.images[item.id]}
                            /> : <></>}
                        <LabelText
                            sizeId={sizeId}
                            theme={theme.labelText}
                            hasImage={!!item.id}
                        >{item.text}</LabelText>
                    </Label>
                )})}
            </List>
        </CWrap>
    );
};

export default Select;

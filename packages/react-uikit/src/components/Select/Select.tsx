/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable guard-for-in */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { mergeThemeObjects } from '../../utils';
import Image from '../Image';
import { List, CWrap, MainBtn, Label, LabelText } from './Select.styles';

export const Select: React.FC<any> = (props): JSX.Element => {
    const { sizeId = 'xl', customize = {}, labelImg, labelText, items } = props;

    const [lblImg, setLabelImg] = useState(labelImg);
    const [listVisibility, setListVisibility] = useState<boolean>(false);

    const handleListVisibility = (event: any, status?: boolean) => {
        status !== undefined ? setListVisibility(status) : setListVisibility(!listVisibility);
    };

    // @ts-ignore
    const theme: { [key in string]: any } = { ...useTheme().components.Select };
    Object.keys(theme).forEach((key: string) => {
        theme[key] = mergeThemeObjects(theme[key], customize[key]);
    });

    return (
        <CWrap sizeId={sizeId} theme={theme.container}>
            <MainBtn sizeId={sizeId} theme={theme.mainBtn}>
                <Label sizeId={sizeId} theme={theme.label} onClick={handleListVisibility}>
                    <Image sizeId={sizeId} customize={theme.labelImg} bgImage={theme.images[lblImg]} />
                    <LabelText sizeId={sizeId} theme={theme.labelText} hasImage={!!lblImg}>
                        {labelText}
                    </LabelText>
                </Label>
            </MainBtn>
            <List sizeId={sizeId} theme={theme.list} isVisible={listVisibility}>
                {items.map((item: any, index: number) => {
                    return (
                        <Label
                            key={index}
                            sizeId={sizeId}
                            theme={theme.label}
                            onClick={(event: any) => {
                                const id = item.id;
                                const handler = item.handler;
                                setLabelImg(id);
                                id ? handler(id) : handler();
                                handleListVisibility(event, false);
                            }}>
                            {item.iconVisibility ? (
                                <Image sizeId={sizeId} customize={theme.labelImg} bgImage={theme.images[item.id]} />
                            ) : (
                                <></>
                            )}
                            <LabelText sizeId={sizeId} theme={theme.labelText} hasImage={!!item.id}>
                                {`${item.text}>${item.text}`}
                            </LabelText>
                        </Label>
                    );
                })}
            </List>
        </CWrap>
    );
};

export default Select;

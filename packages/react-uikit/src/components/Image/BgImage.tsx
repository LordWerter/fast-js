import React from 'react';
import { useTheme } from '@emotion/react';
import { mergeThemeObjects } from '../../utils';
import { CWrap } from './BgImage.styles';
import { TSize } from '../../definitions/IPropTypes';

export interface IProps {
    bgImage: string;
    sizeId?: TSize;
    customize?: any;
}

const BgImage: React.FC<IProps> = (props): JSX.Element => {
    const { bgImage, sizeId = 'mobile', customize = {} } = props;

    // @ts-ignore
    const theme = { ...useTheme().components.Image };
    const requiredThemeKeys = ['container'];

    requiredThemeKeys.forEach((curKey) => {
        theme[curKey] = mergeThemeObjects(theme[curKey], customize[curKey]);
    });

    return (
        <CWrap
            sizeId={sizeId}
            theme={theme.container}
            style={{
                backgroundImage: `url('${bgImage}')`,
            }}
        />
    );
};

export default BgImage;

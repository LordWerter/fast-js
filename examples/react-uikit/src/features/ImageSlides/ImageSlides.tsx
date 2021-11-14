import { FC } from 'react';
import { CWrap } from './ImageSlides.styles';

export interface IProps {
    sizeId?: string;
    langId?: string;
    customise?: unknown;
}

export const ImageSlides: FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', langId = 'ru', customise = null } = props;
    console.log(sizeId, langId, customise);

    return (
        <CWrap>
            {`Hello Wolrd!`}
        </CWrap>
    );

};

export default ImageSlides;
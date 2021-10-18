import { FC } from 'react'
import ImageSlides from '../../features/ImageSlides'
import { CWrap } from './Welcome.styles'

const Welcome: FC = (): JSX.Element => {
    return (
        <CWrap>
            <ImageSlides />
        </CWrap>
    );
};

export default Welcome;

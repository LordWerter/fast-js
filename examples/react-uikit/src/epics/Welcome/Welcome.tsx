import { FC } from 'react'
import ImageSlides from '../../features/ImageSlides'
import { WellWrap } from './Welcome.styles'

const Welcome: FC = (): JSX.Element => {
    return (
        <WellWrap>
            <ImageSlides />
        </WellWrap>
    );
};

export default Welcome;

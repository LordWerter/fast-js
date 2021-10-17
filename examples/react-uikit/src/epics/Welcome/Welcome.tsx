import { FC } from 'react'
import ImageSlides from '../../features/ImageSlides'
import { Cwelcome } from './Welcome.styles'

const Welcome: FC = (): JSX.Element => {
    return (
        <Cwelcome>
            <ImageSlides />
        </Cwelcome>
    );
};

export default Welcome;

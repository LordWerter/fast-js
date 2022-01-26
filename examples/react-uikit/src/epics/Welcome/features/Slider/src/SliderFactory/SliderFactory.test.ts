import SliderFactory from './SliderFactory';

describe('SliderFactory Class', () => {

    let slider = null;

    beforeEach(() => {
        slider = null;
    });

    it('Check of build DOM with Initial Settings', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        slider = new SliderFactory({
            sliderType: 'carousel',
            sliderId: 'native-carousel',
            trackId: 'native-carousel__track',
            elementSelector: 'native-carousel__slide',
            leftArrowId: 'native-carousel__left-arrow',
            rightArrowId: 'native-carousel__right-arrow',
        });

        // checking for the Main Wrapper Node was created for slider

    });
});

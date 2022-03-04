import SliderFactory from './SliderFactory';

describe('SliderFactory Class', () => {

    let slider = null;

    beforeEach(() => {
        slider = null;
    });

    it('Check of build DOM with Initial Settings', () => slider = new SliderFactory({
        type: 'carousel',
        sliderId: 'native-carousel',
        trackId: 'native-carousel__track',
        elementSelector: 'native-carousel__slide',
        leftArrowId: 'native-carousel__left-arrow',
        rightArrowId: 'native-carousel__right-arrow',
    }));
});

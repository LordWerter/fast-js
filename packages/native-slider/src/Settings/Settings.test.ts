import Settings from './Settings';

describe('Settings Class', () => {

    let settings = null;

    it('Default Settings Check', () => {
        settings = new Settings();
        expect(settings.showArrows).toEqual(true);
        expect(settings.showDots).toEqual(false);
        expect(settings.autoplay).toEqual(false);
        expect(settings.autoplaySpeed).toEqual(3000);
        expect(settings.infiniteTrack).toEqual(true);
        expect(settings.firstSlide).toEqual(0);
        expect(settings.slidesToShow).toEqual(1);
        expect(settings.slidesToScroll).toEqual(1);
        expect(settings.transitionTimeout).toEqual(500);
    
        expect(settings.responsive).toEqual(true);
        expect(settings.adaptiveHeight).toEqual(false);
        expect(settings.devicePoints).toEqual(false);
    
        expect(settings.centerMode).toEqual(false);
    
        expect(settings.pauseOnHover).toEqual(true);
        expect(settings.pauseOnDotsHover).toEqual(false);
    
        expect(settings.touchMove).toEqual(true);
        expect(settings.touchThreshold).toEqual(5);
    
        expect(settings.animationSpeed).toEqual(500);
        expect(settings.animationFn).toEqual('linear');
    });
});

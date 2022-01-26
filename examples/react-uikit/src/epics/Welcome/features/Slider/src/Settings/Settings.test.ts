import Settings from './Settings';

describe('Settings Class', () => {

    let settings: any = null;

    const initialSettings = {
        showArrows: true,
        showDots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        infiniteTrack: true,
        firstSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        transitionTimeout: 500,
    
        responsive: true,
        adaptiveHeight: false,
        devicePoints: false,
    
        centerMode: false,
    
        pauseOnHover: true,
        pauseOnDotsHover: false,
    
        touchMove: true,
        touchThreshold: 5,
    
        animationSpeed: 500,
        animationFn: 'linear',
    };
    
    beforeEach(() => {
        settings = null;
    });

    it('Default Settings Check', () => {
        const settingsInst = new Settings();
        settings = settingsInst.getComputed();

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


    it('Set Method', () => {
        const settingsInst = new Settings();
        const methodResult = settingsInst.set('someProperty', 'someValue');
        settings = settingsInst.getComputed();

        expect(methodResult).toEqual(true);
        expect(settings.hasOwnProperty('someProperty')).toEqual(true);
        expect(settings.someProperty === 'someValue').toEqual(true);
    });

    it('Wrong Settings Property Check', () => {
        const settingsInst = new Settings({
            // @ts-ignore
            randomProperty: 'randomValue',
        });
        settings = settingsInst.getComputed();

        expect(settings.hasOwnProperty('randomProperty')).toEqual(false);
    });

    it('Check of getCalculated Method', () => {
        const settingsInst = new Settings({
            showDots: true,
            autoplay: true,
        });
        settings = settingsInst.getComputed();

        const expectedSettings = {
            ...initialSettings,
            showDots: true,
            autoplay: true,
        };

        expect(JSON.stringify(settings) === JSON.stringify(expectedSettings)).toEqual(true);
    });
});

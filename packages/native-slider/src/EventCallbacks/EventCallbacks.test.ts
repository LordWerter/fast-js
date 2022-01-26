import EventCallbacks from './EventCallbacks';

describe('EventCallbacks Class', () => {

    let eventCallbacks = null;

    beforeEach(() => {
        eventCallbacks = null;
    });

    it('Check of build DOM with Initial Settings', () => {
        eventCallbacks = new EventCallbacks({
            
        });

        console.log(eventCallbacks);
    });
});

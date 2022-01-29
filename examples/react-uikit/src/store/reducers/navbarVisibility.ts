import { INavbarVisibility, TNavbarActions, TVisibilityActions } from "../../definitions";

const initialState: INavbarVisibility = {
    visibility: false,
};

export const navbarVisibility = (state = initialState, action: TNavbarActions): INavbarVisibility => {
    switch (action.type) {
        case TVisibilityActions.HIDE_NAVBAR:
            return { visibility: action.visibility, };
        case TVisibilityActions.DISPLAY_NAVBAR:
            return { visibility: action.visibility, };
        default:
            return state;
    };
};
import { Dispatch } from "react"
import { TNavbarActions, TVisibilityActions } from "../../definitions"

export const hideNavbar = () => {
    return (dispatch: Dispatch<TNavbarActions>) => {
        dispatch({ type: TVisibilityActions.HIDE_NAVBAR, visibility: false, });
    };
};

export const displayNavbar = () => {
    return (dispatch: Dispatch<TNavbarActions>) => {
        dispatch({ type: TVisibilityActions.DISPLAY_NAVBAR, visibility: true, });
    };
};
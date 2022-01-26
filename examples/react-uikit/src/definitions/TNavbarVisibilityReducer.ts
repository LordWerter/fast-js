export interface INavbarVisibility {
    visibility: boolean,
}

export enum TVisibilityActions {
    HIDE_NAVBAR = 'HIDE_NAVBAR',
    DISPLAY_NAVBAR = 'DISPLAY_NAVBAR',
}

interface IHideNavbarAction {
    type: TVisibilityActions.HIDE_NAVBAR,
    visibility: false,
}

interface IDisplayNavbarAction {
    type: TVisibilityActions.DISPLAY_NAVBAR,
    visibility: true,
}

export type TNavbarActions = IHideNavbarAction | IDisplayNavbarAction;

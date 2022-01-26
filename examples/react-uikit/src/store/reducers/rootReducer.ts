import { combineReducers } from "redux";
import { navbarVisibility } from "./navbarVisibility";

export const rootReducer = combineReducers({
    navbarVisibility,
});

export type TRootState = ReturnType<typeof rootReducer>
export default rootReducer;
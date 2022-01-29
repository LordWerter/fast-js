import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TRootState } from "../../store/reducers/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
import { configureStore } from "@reduxjs/toolkit";
import simbriefReducer from './reducers/SimbriefReducer';
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        simbrief: simbriefReducer
    },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

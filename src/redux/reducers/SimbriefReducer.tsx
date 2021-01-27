import { ISimbriefData, defaultSimbriefData } from "../../utils/SimbriefApi";
import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";

// eslint-disable-next-line no-unused-vars
const fetchSimbriefData = createAction<ISimbriefData>('simbrief/setSimbriefData');

const simbriefReducer = createReducer(defaultSimbriefData, {
    fetchSimbriefData: (store, action: PayloadAction<ISimbriefData>) => {
        return store = { ...action.payload };
    }
});

export default simbriefReducer;

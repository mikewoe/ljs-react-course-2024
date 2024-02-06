import {createSlice} from "@reduxjs/toolkit";
import {TNUser} from "../../../types/types.ts";
import {normalizedUsers} from "../../../constants/normilized-mock.ts";
import {createInitState, TDataModule} from "../../utils.ts";

export type TNUserModule = TDataModule<TNUser>

export const userSlice = createSlice({
    name: 'user',
    initialState: createInitState(normalizedUsers) as TNUserModule,
    reducers: {},
    selectors: {
        selectIds: (sliceState: TNUserModule) => sliceState.ids,
        selectAll: (sliceState: TNUserModule) => sliceState.entities,
        selectById: (sliceState: TNUserModule, id: string): TNUser =>
            userSlice.selectors.selectAll({user: sliceState})[id]
    }
});
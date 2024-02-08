import {createSlice} from "@reduxjs/toolkit";
import {TNUser} from "../../../types/types.ts";
import {normalizedUsers} from "../../../constants/normilized-mock.ts";
import {createInitState, TSliceState} from "../../utils.ts";

export type TUserSliceState = TSliceState<TNUser>

export const userSlice = createSlice({
    name: 'user',
    initialState: createInitState(normalizedUsers) as TUserSliceState,
    reducers: {},
    selectors: {
        selectIds: (sliceState: TUserSliceState) => sliceState.ids,
        selectAll: (sliceState: TUserSliceState) => sliceState.entities,
        selectById: (sliceState: TUserSliceState, id: string): TNUser =>
            userSlice.selectors.selectAll({user: sliceState})[id]
    }
});
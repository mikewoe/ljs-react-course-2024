import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {TNUser} from "../../../types/types.ts";
import {normalizedUsers} from "../../../constants/normilized-mock.ts";
import {createInitState, TSliceState} from "../../utils.ts";
import {getUsers} from "./thunks/get-users.ts";

export type TUserSliceState = TSliceState<TNUser>

const entityAdapter = createEntityAdapter<TNUser>();

export const userSlice = createSlice({
    name: 'user',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    selectors: {
        selectIds: (sliceState: TUserSliceState) => sliceState.ids,
        selectAll: (sliceState: TUserSliceState) => sliceState.entities,
        selectById: (sliceState: TUserSliceState, id: string): TNUser =>
            userSlice.selectors.selectAll({user: sliceState})[id]
    },
    extraReducers: builder => builder
        .addCase(getUsers.fulfilled, (state, {payload}) => {
            entityAdapter.setAll(state, payload);
        })
});
import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {TNDish} from "../../../types/types.ts";
import {normalizedDishes} from "../../../constants/normilized-mock.ts";
import {createInitState, TSliceState} from "../../utils.ts";
import {getDishesByRestaurantId} from "./thunks/get-dishes-by-restaurant-id.ts";

export type TDishSliceState = TSliceState<TNDish>;

const entityAdapter = createEntityAdapter<TNDish>();

export const dishSlice = createSlice({
    name: 'dish',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    selectors: {
        selectIds: (sliceState: TDishSliceState): string[] => sliceState.ids,
        selectAll: (sliceState: TDishSliceState) => sliceState.entities,
        selectById: (sliceState: TDishSliceState, id: string): TNDish => dishSlice.selectors.selectAll({dish: sliceState})[id]
    },
    extraReducers: builder =>
        builder
            .addCase(getDishesByRestaurantId.fulfilled, (state, {payload}) => {
                entityAdapter.upsertMany(state, payload);
            })
});


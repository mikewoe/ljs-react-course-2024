import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {TNRestaurant} from "../../../types/types.ts";
import {TSliceState} from "../../utils.ts";
import {getRestaurants} from "./thunks/get-restaurants.ts";

export type TRestaurantSliceState = TSliceState<TNRestaurant>;

const entityAdapter = createEntityAdapter<TNRestaurant>()

// @ts-ignore
export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    selectors: {
        selectIds: (sliceState: TRestaurantSliceState) => sliceState.ids,
        selectAll: (sliceState: TRestaurantSliceState) => sliceState.entities,
        selectById: (sliceState: TRestaurantSliceState, id: string): TNRestaurant =>
            restaurantSlice.selectors.selectAll({restaurant: sliceState})[id],
        selectMenuById: (sliceState: TRestaurantSliceState, id: string): string[] =>
            restaurantSlice.selectors.selectById({restaurant: sliceState}, id).menu,
        selectReviewsById: (sliceState: TRestaurantSliceState, id: string): string[] =>
            restaurantSlice.selectors.selectById({restaurant: sliceState}, id).reviews,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getRestaurants.fulfilled, (state, {payload}) => {
                entityAdapter.setAll(state, payload);
            })
});

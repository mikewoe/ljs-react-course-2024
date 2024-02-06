import {createSlice} from "@reduxjs/toolkit";
import {normalizedRestaurants} from "../../../constants/normilized-mock.ts";
import {TNRestaurant} from "../../../types/types.ts";
import {createInitState, TSliceState} from "../../utils.ts";

export type TRestaurantSliceState = TSliceState<TNRestaurant>;

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: createInitState(normalizedRestaurants) as TRestaurantSliceState,
    reducers: {},
    selectors: {
        selectIds: (sliceState: TRestaurantSliceState) => sliceState.ids,
        selectAll: (sliceState: TRestaurantSliceState) => sliceState.entities,
        selectById: (sliceState: TRestaurantSliceState, id: string): TNRestaurant =>
            restaurantSlice.selectors.selectAll({restaurant: sliceState})[id]
    }
});

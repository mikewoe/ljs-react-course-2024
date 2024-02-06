import {createSlice} from "@reduxjs/toolkit";
import {normalizedRestaurants} from "../../../constants/normilized-mock.ts";
import {TNRestaurant} from "../../../types/types.ts";
import {createInitState, TDataModule} from "../../utils.ts";

export type TRestaurantModule = TDataModule<TNRestaurant>;

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: createInitState(normalizedRestaurants) as TRestaurantModule,
    reducers: {},
    selectors: {
        selectIds: (sliceState: TRestaurantModule) => sliceState.ids,
        selectAll: (sliceState: TRestaurantModule) => sliceState.entities,
        selectById: (sliceState: TRestaurantModule, id: string): TNRestaurant =>
            restaurantSlice.selectors.selectAll({restaurant: sliceState})[id]
    }
});

import {createAsyncThunk} from "@reduxjs/toolkit";
import {restaurantSlice} from "../index.ts";
import {TNRestaurant} from "../../../../types/types.ts";
import {TState} from "../../../index.ts";

// @ts-ignore
export const getRestaurants = createAsyncThunk<TNRestaurant[], void, { state: TState}>(
    'restaurant/getRestaurants',
    async () => {
        const response = await fetch('http://localhost:3001/api/restaurants');

        return response.json();
    },
    {
        condition: (_, {getState}) => !restaurantSlice.selectors.selectAll(getState())?.length
    }
);
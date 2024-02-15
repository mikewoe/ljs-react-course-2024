import {createAsyncThunk} from "@reduxjs/toolkit";
import {TNDish} from "../../../../types/types.ts";
import {TState} from "../../../index.ts";
import {dishSlice} from "../index.ts";
import {restaurantSlice} from "../../restaurants";

export const getDishesByRestaurantId = createAsyncThunk<TNDish[], void, {state: TState}>(
    'dishes/getDishesByRestaurantId',
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);

        return response.json();
    },
    {
        condition: (restaurantId, {getState}) => {
            const restaurantMenuIds: string[] = restaurantSlice.selectors.selectMenuById(getState(), restaurantId);
            const dishIds: string[] = dishSlice.selectors.selectIds(getState());

            return !restaurantMenuIds.every(id => dishIds.includes(id));
        }
    }
)
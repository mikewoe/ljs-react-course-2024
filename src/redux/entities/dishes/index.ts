import {createSlice} from "@reduxjs/toolkit";
import {TNDish} from "../../../types/types.ts";
import {normalizedDishes} from "../../../constants/normilized-mock.ts";
import {createInitState, TSliceState} from "../../utils.ts";


export type TDishSliceState = TSliceState<TNDish>;

export const dishSlice = createSlice({
    name: 'dish',
    initialState: createInitState(normalizedDishes) as TDishSliceState,
    reducers: {},
    selectors: {
        selectIds: (sliceState: TDishSliceState) => sliceState.ids,
        selectAll: (sliceState: TDishSliceState) => sliceState.entities,
        selectById: (sliceState: TDishSliceState, id: string): TNDish => dishSlice.selectors.selectAll({dish: sliceState})[id]
    }
});


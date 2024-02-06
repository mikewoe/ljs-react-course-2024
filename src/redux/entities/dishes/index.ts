import {createSlice} from "@reduxjs/toolkit";
import {TNDish} from "../../../types/types.ts";
import {normalizedDishes} from "../../../constants/normilized-mock.ts";
import {createInitState, TDataModule} from "../../utils.ts";


export type TDishModule = TDataModule<TNDish>;

export const dishSlice = createSlice({
    name: 'dish',
    initialState: createInitState(normalizedDishes) as TDishModule,
    reducers: {},
    selectors: {
        selectIds: (sliceState: TDishModule) => sliceState.ids,
        selectAll: (sliceState: TDishModule) => sliceState.entities,
        selectById: (sliceState: TDishModule, id: string): TNDish => dishSlice.selectors.selectAll({dish: sliceState})[id]
    }
});


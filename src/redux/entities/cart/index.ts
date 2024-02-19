import {createSlice} from "@reduxjs/toolkit";

export type TCartState = {
    [key: string]: number
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        increment: (cartState: TCartState, {payload: dishId}) => {
            cartState[dishId] = (cartState[dishId] || 0) + 1;
        },
        decrement: (cartState: TCartState, {payload: dishId}) => {
            cartState[dishId] = (cartState[dishId] || 0) - 1;

            if (cartState[dishId] <= 0) {
                delete cartState[dishId];
            }
        },
    },
    selectors: {
        selectProductAmountById: (sliceState: TCartState, dishId) => {
            return sliceState[dishId] || 0;
        },
        selectProductAmount: (sliceState: TCartState) => {
            return Object.values(sliceState).reduce((acc, amount) => acc + amount, 0)
        },
        selectCartProductIds: (sliceState: TCartState) => {
            return Object.keys(sliceState);
        }
    }
});

export const {selectProductAmountById, selectProductAmount, selectCartProductIds} = cartSlice.selectors;
export const {increment, decrement} = cartSlice.actions;
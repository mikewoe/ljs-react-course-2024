import {createSlice} from "@reduxjs/toolkit";

export type TCartState = {
    [key: string]: number
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        increment: (cartState: TCartState, {payload: productId}) => {
            cartState[productId] = (cartState[productId] || 0) + 1;
        },
        decrement: (cartState: TCartState, {payload: productId}) => {
            cartState[productId] = (cartState[productId] || 0) - 1;

            if (cartState[productId] <= 0) {
                delete cartState[productId];
            }
        },
    },
    selectors: {
        selectProductAmountById: (sliceState: TCartState, productId) => {
            return sliceState[productId] || 0;
        }
    }
});

export const {selectProductAmountById} = cartSlice.selectors;
export const {increment, decrement} = cartSlice.actions;
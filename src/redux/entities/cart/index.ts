import {createSlice} from "@reduxjs/toolkit";

export type TCartState = {
    [key: string]: TDishInfo
}

export type TDishInfo = {
    id: string
    amount: number,
    restaurantId: string
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        increment: (cartState: TCartState, {payload: dishInfo}) => {
            const cartDish = cartState[dishInfo.dishId]
                || {id: dishInfo.dishId, amount: 0, restaurantId: dishInfo.restaurantId}

            cartDish.amount = cartDish.amount +1;

            cartState[dishInfo.dishId] = cartDish;
        },
        decrement: (cartState: TCartState, {payload: dishInfo}) => {
            const cartDish = cartState[dishInfo.dishId]
                || {id: dishInfo.dishId, amount: 0, restaurantId: dishInfo.restaurantId}

            cartDish.amount = cartDish.amount - 1;

            cartState[dishInfo.dishId] = cartDish;

            if (cartState[dishInfo.dishId].amount <= 0) {
                delete cartState[dishInfo.dishId];
            }
        },
    },
    selectors: {
        selectProductAmountById: (sliceState: TCartState, dishId) => {
            return sliceState[dishId]?.amount || 0;
        },
        selectProductAmount: (sliceState: TCartState) => {
            return Object.values(sliceState).reduce((acc, dishInfo) => acc + dishInfo.amount, 0)
        },
        selectCartProductIds: (sliceState: TCartState) => {
            return Object.keys(sliceState);
        },
        selectCartProducts: (sliceState: TCartState) => {
            return Object.values(sliceState);
        }
    }
});

export const {selectProductAmountById, selectProductAmount, selectCartProductIds, selectCartProducts} = cartSlice.selectors;
export const {increment, decrement} = cartSlice.actions;
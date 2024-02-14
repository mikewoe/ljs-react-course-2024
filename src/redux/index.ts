import {combineSlices, configureStore} from "@reduxjs/toolkit";
import {restaurantSlice} from "./entities/restaurants";
import {dishSlice} from "./entities/dishes";
import {reviewSlice} from "./entities/reviews";
import {userSlice} from "./entities/users";
import {cartSlice} from "./entities/cart";

const rootReducer = combineSlices(
    restaurantSlice, dishSlice, reviewSlice, userSlice, cartSlice
);

export const store = configureStore({
    reducer: rootReducer
});

export type TState = ReturnType<typeof store.getState>;
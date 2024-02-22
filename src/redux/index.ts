import {combineSlices, configureStore} from "@reduxjs/toolkit";
import {restaurantSlice} from "./entities/restaurants";
import {dishSlice} from "./entities/dishes";
import {reviewSlice} from "./entities/reviews";
import {userSlice} from "./entities/users";
import {cartSlice} from "./entities/cart";
import {requestSlice} from "./entities/requests";
import {api} from "./services/api.ts";

const rootReducer = combineSlices(
    restaurantSlice, dishSlice, reviewSlice, userSlice, cartSlice, requestSlice, api
);

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware)
});

export type TState = ReturnType<typeof store.getState>;
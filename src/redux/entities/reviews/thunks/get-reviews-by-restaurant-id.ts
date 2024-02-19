import {createAsyncThunk} from "@reduxjs/toolkit";
import {TNReview} from "../../../../types/types.ts";
import {TState} from "../../../index.ts";
import {restaurantSlice} from "../../restaurants";
import {reviewSlice} from "../index.ts";

export const getReviewsByRestaurantId = createAsyncThunk<TNReview[], void, {state: TState}>(
    'reviews/getReviewsByRestaurantId',
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);

        return response.json();
    },
    {
        condition: (restaurantId, {getState}) => {
            const restaurantReviewIds: string[] = restaurantSlice.selectors.selectReviewsById(getState(), restaurantId);
            const reviewIds: string[] = reviewSlice.selectors.selectIds(getState());

            return !restaurantReviewIds.every(id => reviewIds.includes(id));
        }
    }
);
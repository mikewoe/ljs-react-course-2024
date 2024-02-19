import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {normalizedReviews} from "../../../constants/normilized-mock.ts";
import {TNReview} from "../../../types/types.ts";
import {createInitState, TSliceState} from "../../utils.ts";
import {getReviewsByRestaurantId} from "./thunks/get-reviews-by-restaurant-id.ts";

export type TReviewSliceState = TSliceState<TNReview>

const entityAdapter = createEntityAdapter<TNReview>();

export const reviewSlice = createSlice({
    name: 'review',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    selectors: {
        selectIds: (sliceState: TReviewSliceState) => sliceState.ids,
        selectAll: (sliceState: TReviewSliceState) => sliceState.entities,
        selectById: (sliceState: TReviewSliceState, id: string): TNReview =>
            reviewSlice.selectors.selectAll({review: sliceState})[id]
    },
    extraReducers: builder =>
        builder
            .addCase(getReviewsByRestaurantId.fulfilled, (state, {payload}) => {
                entityAdapter.upsertMany(state, payload);
            })
});
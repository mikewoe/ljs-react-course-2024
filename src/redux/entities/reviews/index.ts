import {createSlice} from "@reduxjs/toolkit";
import {normalizedReviews} from "../../../constants/normilized-mock.ts";
import {TNReview} from "../../../types/types.ts";
import {createInitState, TSliceState} from "../../utils.ts";

export type TReviewSliceState = TSliceState<TNReview>

export const reviewSlice = createSlice({
    name: 'review',
    initialState: createInitState(normalizedReviews) as TReviewSliceState,
    reducers: {},
    selectors: {
        selectIds: (sliceState: TReviewSliceState) => sliceState.ids,
        selectAll: (sliceState: TReviewSliceState) => sliceState.entities,
        selectById: (sliceState: TReviewSliceState, id: string): TNReview =>
            reviewSlice.selectors.selectAll({review: sliceState})[id]
    }
});
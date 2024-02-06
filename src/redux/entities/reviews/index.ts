import {createSlice} from "@reduxjs/toolkit";
import {normalizedReviews} from "../../../constants/normilized-mock.ts";
import {TNReview} from "../../../types/types.ts";
import {createInitState, TDataModule} from "../../utils.ts";

export type TReviewModule = TDataModule<TNReview>

export const reviewSlice = createSlice({
    name: 'review',
    initialState: createInitState(normalizedReviews) as TReviewModule,
    reducers: {},
    selectors: {
        selectIds: (sliceState: TReviewModule) => sliceState.ids,
        selectAll: (sliceState: TReviewModule) => sliceState.entities,
        selectById: (sliceState: TReviewModule, id: string): TNReview =>
            reviewSlice.selectors.selectAll({review: sliceState})[id]
    }
});
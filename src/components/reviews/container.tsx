import {Reviews} from "./component.tsx";
import {useDispatch, useSelector} from "react-redux";
import {restaurantSlice} from "../../redux/entities/restaurants";
import {useEffect, useState} from "react";
import {requestSlice} from "../../redux/entities/requests";
import {getReviewsByRestaurantId} from "../../redux/entities/reviews/thunks/get-reviews-by-restaurant-id.ts";

export const ReviewsContainer = ({restaurantId}: {restaurantId: string}) => {
    const reviewIds: string[] = useSelector((state) =>
        restaurantSlice.selectors.selectReviewsById(state, restaurantId));

    const [requestId, setRequestId] = useState(null);
    const isLoading = useSelector((state) =>
        requestId && requestSlice.selectors.selectIsLoading(state, requestId) || false);

    const dispatch = useDispatch();

    useEffect(() => {
        setRequestId(dispatch(getReviewsByRestaurantId(restaurantId)).requestId);
    }, [dispatch, restaurantId]);

    if (!reviewIds?.length) {
        return null;
    }

    return (
        <Reviews reviewIds={reviewIds} isLoading={isLoading}/>
    )
}
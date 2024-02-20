import {Reviews} from "./component.tsx";
import {useSelector} from "react-redux";
import {restaurantSlice} from "../../redux/entities/restaurants";
import {getReviewsByRestaurantId} from "../../redux/entities/reviews/thunks/get-reviews-by-restaurant-id.ts";
import {useRequest} from "../../hooks/use-request.ts";
import {REQUEST_STATUS} from "../../redux/entities/requests/constants.ts";

export const ReviewsContainer = ({restaurantId}: {restaurantId: string}) => {
    const reviewIds: string[] = useSelector((state) =>
        restaurantSlice.selectors.selectReviewsById(state, restaurantId));

    const [requestStatus] = useRequest(getReviewsByRestaurantId, restaurantId);

    if (!reviewIds?.length) {
        return null;
    }

    return (
        <Reviews reviewIds={reviewIds} isLoading={requestStatus === REQUEST_STATUS.pending}/>
    )
}
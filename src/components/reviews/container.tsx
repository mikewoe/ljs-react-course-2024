import {Reviews} from "./component.tsx";
import {useGetReviewsQuery} from "../../redux/services/api.ts";

export const ReviewsContainer = ({restaurantId}: {restaurantId: string}) => {
    const {data: reviews, isLoading} = useGetReviewsQuery(restaurantId);

    if (!reviews?.length) {
        return null;
    }

    return (
        <Reviews reviews={reviews} isLoading={isLoading} restaurantId={restaurantId}/>
    )
}
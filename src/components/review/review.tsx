import {TReview} from "../../types/types.ts";

export const Review = ({review}: {review: TReview}) => {
    return (
        <div>
            {`${review.user}: ${review.text} - ${review.rating}`}
        </div>
    )
}
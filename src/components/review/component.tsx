import {TNReview, TNUser} from "../../types/types.ts";

export const Review = ({review, user}: {review: TNReview, user: TNUser}) => {
    return (
        <div key={review.id}>
            {`${user.name}: ${review.text} - ${review.rating}`}
        </div>
    )
}
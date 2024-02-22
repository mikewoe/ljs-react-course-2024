import {ReviewForm} from "../review-form/component.tsx";
import {useUpdateReviewMutation} from "../../../../redux/services/api.ts";
import {TNReview, TNUser} from "../../../../types/types.ts";

export const EditReviewContainer = ({restaurantId, user, review, onSubmit}: {
    restaurantId: string,
    user: TNUser,
    review: TNReview,
    onSubmit: () => void
}) => {
    const [updateReview, {isLoading}] = useUpdateReviewMutation();

    return (
        <ReviewForm
            restaurantId={restaurantId}
            onSubmit={(updatedReview) => updateReview({review: {...updatedReview, id: review.id}}).then(() => onSubmit())}
            isLoading={isLoading}
            user={user}
            review={review}/>
    )
}
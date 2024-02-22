import {useContext} from "react";
import {UserContext} from "../../../../contexts/user.tsx";
import {ReviewForm} from "../review-form/component.tsx";
import {useCreateReviewMutation} from "../../../../redux/services/api.ts";

export const CreateReviewContainer = ({restaurantId}: {
    restaurantId: string
}) => {
    const {user} = useContext(UserContext);
    const [createReview, {isLoading}] = useCreateReviewMutation();

    if (!user.isAuth) {
        return (<div></div>)
    }

    return (
        <ReviewForm
            restaurantId={restaurantId}
            onSubmit={(review) => createReview({restaurantId, review})}
            isLoading={isLoading}
            user={{id: user.userId, name: user.userName}}
        />
    );
}
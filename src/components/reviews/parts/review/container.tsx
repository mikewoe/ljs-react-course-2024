import {Review} from "./component.tsx";
import {TNReview, TNUser} from "../../../../types/types.ts";
import {useGetUsersQuery} from "../../../../redux/services/api.ts";

export const ReviewController = ({review, restaurantId}: {review: TNReview, restaurantId: string}) => {
    const {data: users} = useGetUsersQuery(undefined);

    if (!review || !users) {
        return null;
    }

    return (
        <Review
            key={review.id}
            restaurantId={restaurantId}
            review={review}
            user={users.find((user: TNUser) => user.id === review.userId)}/>
    )
}
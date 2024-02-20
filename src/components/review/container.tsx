import {Review} from "./component.tsx";
import {TNReview} from "../../types/types.ts";
import {useGetUsersQuery} from "../../redux/services/api.ts";

export const ReviewController = ({review}: {review: TNReview}) => {
    const {data: users} = useGetUsersQuery();

    if (!review || !users) {
        return null;
    }

    return (
        <Review key={review.id} review={review} user={users.find(user => user.id === review.userId)}/>
    )
}
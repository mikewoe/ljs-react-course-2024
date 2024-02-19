import {Review} from "./component.tsx";
import {useSelector} from "react-redux";
import {TState} from "../../redux";
import {reviewSlice} from "../../redux/entities/reviews";
import {userSlice} from "../../redux/entities/users";

export const ReviewController = ({reviewId}: {reviewId: string}) => {
    const review = useSelector((state: TState) => reviewSlice.selectors.selectById(state, reviewId));
    const user = useSelector((state: TState) => review && userSlice.selectors.selectById(state, review.userId));

    if (!review || !user) {
        return null;
    }

    return (
        <Review key={review.id} review={review} user={user}/>
    )
}
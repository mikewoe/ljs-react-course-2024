import {useSelector} from "react-redux";
import {reviewSlice} from "../../redux/entities/reviews";
import {TState} from "../../redux";
import {userSlice} from "../../redux/entities/users";

export const Review = ({reviewId}: {reviewId: string}) => {
    const review = useSelector((state: TState) => reviewSlice.selectors.selectById(state, reviewId));
    const user = useSelector((state: TState) => userSlice.selectors.selectById(state, review.userId));

    return (
        <div key={reviewId}>
            {`${user.name}: ${review.text} - ${review.rating}`}
        </div>
    )
}
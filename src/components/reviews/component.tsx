import styles from "./styles.module.scss"
import {ReviewForm} from "./parts/review-form/component.tsx";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.tsx";
import {ReviewController} from "./parts/review/container.tsx";
import {TNReview} from "../../types/types.ts";
import {CreateReviewContainer} from "./parts/create-review/container.tsx";

export const Reviews = ({reviews, isLoading, restaurantId}: {
    reviews: TNReview[],
    isLoading: boolean,
    restaurantId: string
}) => {
    const {user} = useContext(UserContext);

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className={styles.root}>
            <h3>Отзывы</h3>

            <ul>
                {reviews.map(review => (
                    <li key={review.id}><ReviewController restaurantId={restaurantId} review={review}/></li>
                ))}
            </ul>

            {user.isAuth && <CreateReviewContainer restaurantId={restaurantId}/>}
        </div>
    );
}
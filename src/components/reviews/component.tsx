import styles from "./styles.module.scss"
import {ReviewForm} from "../review-form/component.tsx";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.tsx";
import {ReviewController} from "../review/container.tsx";
import {TNReview} from "../../types/types.ts";

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
                    <li key={review.id}><ReviewController review={review}/></li>
                ))}
            </ul>

            {user.isAuth && <ReviewForm restaurantId={restaurantId}/>}
        </div>
    );
}
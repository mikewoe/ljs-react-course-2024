import styles from "./styles.module.scss"
import {ReviewForm} from "../review-form/component.tsx";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.tsx";
import {ReviewController} from "../review/container.tsx";

export const Reviews = ({reviewIds, isLoading}: {
    reviewIds: string[],
    isLoading: boolean
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
                {reviewIds.map(reviewId => (
                    <li key={reviewId}><ReviewController reviewId={reviewId}/></li>
                ))}
            </ul>

            {user.isAuth && <ReviewForm/>}
        </div>
    );
}
import {TReview} from "../../types/types.ts";
import {Review} from "../review/review.tsx";
import styles from "./styles.module.scss"
import {ReviewForm} from "../review-form/component.tsx";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.tsx";

export const Reviews = ({reviews}: {reviews: TReview[]}) => {
    const {user} = useContext(UserContext);

    return (
        <div className={styles.root}>
            <h3>Отзывы</h3>

            <ul>
                {reviews.map(review => (
                    <li><Review review={review}/></li>
                ))}
            </ul>

            {user.isAuth && <ReviewForm/>}
        </div>
    );
}
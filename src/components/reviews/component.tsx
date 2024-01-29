import {TReview} from "../../types/types.ts";
import {Review} from "../review/review.tsx";
import styles from "./styles.module.scss"

export const Reviews = ({reviews}: {reviews: TReview[]}) => {
    return (
        <div className={styles.root}>
            <h3>Отзывы</h3>

            <ul>
                {reviews.map(review => (
                    <li><Review review={review}/></li>
                ))}
            </ul>
        </div>
    );
}
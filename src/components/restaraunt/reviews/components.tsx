import {TReview} from "../../../types/types.ts";

export const Reviews = ({reviews}: {reviews: TReview[]}) => {
    return (
        <>
            <h3>Отзывы</h3>

            <ul>
                {reviews.map(review => (
                    <li>{`${review.user}: ${review.text} - ${review.rating}`}</li>
                ))}
            </ul>
        </>
    );
}
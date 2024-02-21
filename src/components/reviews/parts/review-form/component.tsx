import {Field} from "../../../field/component.tsx";
import styles from './styles.module.scss'
import {useReviewForm} from "./use-review-form.ts";
import {Button} from "../../../button/component.tsx";
import {TNReview, TNUser} from "../../../../types/types.ts";
import {useEffect} from "react";

export const ReviewForm = ({restaurantId, onSubmit, isLoading, user, review}: {
    restaurantId: string,
    onSubmit: (arg0: object) => Promise<any>,
    isLoading: boolean,
    user: TNUser,
    review?: TNReview
}) => {
    const {form, setRating, setText, isFormValidated, reset} = useReviewForm();

    useEffect(() => {
        if (review) {
            setText(review.text);
            setRating(review.rating);
        }
    }, [review, setRating, setText]);
    return (
        <div className={styles.root}>
            <div className={styles.form}>
                <div>{user.name}</div>
                <Field
                    fieldName="text"
                    labelName="Текст отзыва"
                    onChange={(event) => setText(event.target.value)}
                    value={form.text}
                />

                <Field
                    fieldName="rating"
                    type="number"
                    onChange={(event) => setRating(event.target.value)}
                    value={form.rating}
                />

                <div className={styles.formButton}>
                    <Button
                        disabled={!isFormValidated()}
                        isLoading={isLoading}
                        onClick={() => {
                            onSubmit({
                                userId: user.id,
                                user: user.name,
                                text: form.text,
                                rating: form.rating
                            }).then(() => reset())
                        }
                    }
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}
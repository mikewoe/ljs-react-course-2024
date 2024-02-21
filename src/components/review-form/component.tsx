import {Field} from "../field/component.tsx";
import styles from './styles.module.scss'
import {useReviewForm} from "./use-review-form.ts";
import {Button} from "../button/component.tsx";
import {useContext, useEffect} from "react";
import {UserContext} from "../../contexts/user.tsx";
import {useCreateReviewMutation} from "../../redux/services/api.ts";

export const  ReviewForm = ({restaurantId}: {restaurantId: string}) => {
    const {user} = useContext(UserContext);
    const {form, setName, setRating, setText, isFormValidated} = useReviewForm();

    const [createReview, {isLoading}] = useCreateReviewMutation();

    useEffect(() => {
        if (user.isAuth) {
            setName(user.userName)
        }
    }, [setName, user]);

    if (!user.isAuth) {
        return (<div></div>)
    }

    return (
        <div className={styles.root}>
            <div className={styles.form}>
                <div>{user.userName}</div>
                <Field fieldName="text" labelName="Текст отзыва" onChange={setText} value={form.text}/>
                <Field fieldName="rating" type="number" onChange={setRating} value={form.rating}/>

                <div className={styles.formButton}>
                    <Button
                        disabled={!isFormValidated()}
                        isLoading={isLoading}
                        onClick={() =>
                            createReview({
                                restaurantId,
                                newReview: {
                                    userId: user.userId,
                                    user: user.userName,
                                    text: form.text,
                                    rating: form.rating
                                }
                            })}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}
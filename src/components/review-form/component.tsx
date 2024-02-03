import {Field} from "../field/component.tsx";
import styles from './styles.module.scss'
import {useReviewForm} from "./use-review-form.ts";
import {Button} from "../button/component.tsx";
import {useContext, useEffect} from "react";
import {UserContext} from "../../contexts/user.tsx";

export const ReviewForm = () => {
    const {user} = useContext(UserContext);
    const {form, setName, setRating, setText} = useReviewForm();

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
                    <Button onClick={() => console.log('form: ', form)}>Submit</Button>
                </div>
            </div>
        </div>
    )
}
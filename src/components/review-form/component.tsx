import {Field} from "../field/component.tsx";
import styles from './styles.module.scss'
import {useReviewForm} from "./use-review-form.ts";
import {Button} from "../button/component.tsx";

export const ReviewForm = () => {
    const {form, setName, setRating, setText} = useReviewForm();

    return (
        <div className={styles.root}>
            <div className={styles.form}>
                <Field fieldName="user" onChange={setName} value={form.name}/>
                <Field fieldName="text" onChange={setText} value={form.text}/>
                <Field fieldName="rating" type="number" onChange={setRating} value={form.rating}/>

                <div className={styles.formButton}>
                    <Button onClick={() => console.log('form: ', form)}>Submit</Button>
                </div>
            </div>
        </div>
    )
}
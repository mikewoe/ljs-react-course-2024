import {TDish} from "../../types/types.ts";
import {useState} from "react";
import styles from './styles.module.scss'
import {Counter} from "../counter/component.tsx";

export const Dish = ({dish} : {dish: TDish}) => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.root}>
            <div>
                <div className={styles.dishName}>{dish.name}</div>
                <div className={styles.ingredients}>({dish.ingredients.join(', ')})</div>
                <div className={styles.prices}>{dish.price} rub</div>
            </div>

            <div>
                <Counter value={count} onChange={setCount}/>

                <div className={styles.pricesCount}>{dish.price * count} rub.</div>
            </div>
        </div>
    )
}
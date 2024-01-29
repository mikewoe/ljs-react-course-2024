import {TDish} from "../../types/types.ts";
import {useState} from "react";
import styles from './styles.module.scss'
import {Button} from "../button/component.tsx";

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
                <div className={styles.buttonsGroup}>
                    <Button className={styles.button} disabled={count <= 0} onClick={() => setCount(count - 1)}>-</Button>
                    {count}
                    <Button className={styles.button} disabled={count >= 5} onClick={() => setCount(count + 1)}>+</Button>
                </div>

                <div className={styles.pricesCount}>{dish.price * count} rub.</div>
            </div>
        </div>
    )
}
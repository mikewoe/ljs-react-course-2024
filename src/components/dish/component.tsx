import styles from './styles.module.scss'
import {Counter} from "../counter/component.tsx";
import {TNDish} from "../../types/types.ts";

export const Dish = ({dish, amount, decrement, increment} : {
    dish: TNDish,
    amount: number,
    decrement: () => void,
    increment: () => void,
}) => {
    return (
        <div className={styles.root} key={dish.id}>
            <div>
                <div className={styles.dishName}>{dish.name}</div>
                <div className={styles.ingredients}>({dish.ingredients.join(', ')})</div>
                <div className={styles.prices}>{dish.price} rub</div>
            </div>

            <div>
                <Counter
                    value={amount}
                    decrement={decrement}
                    increment={increment}/>

                <div className={styles.pricesCount}>{dish.price * amount} rub.</div>
            </div>
        </div>
    )
}
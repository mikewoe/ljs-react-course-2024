import {useState} from "react";
import styles from './styles.module.scss'
import {Counter} from "../counter/component.tsx";
import {useSelector} from "react-redux";
import {dishSlice} from "../../redux/entities/dishes";
import {TState} from "../../redux";

export const Dish = ({dishId} : {dishId: string}) => {
    const [count, setCount] = useState(0);
    const dish = useSelector((state: TState) => dishSlice.selectors.selectById(state, dishId))

    return (
        <div className={styles.root} key={dishId}>
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
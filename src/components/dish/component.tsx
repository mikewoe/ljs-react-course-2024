import styles from './styles.module.scss'
import {Counter} from "../counter/component.tsx";
import {useDispatch, useSelector} from "react-redux";
import {dishSlice} from "../../redux/entities/dishes";
import {TState} from "../../redux";
import {decrement, increment, selectProductAmountById} from "../../redux/entities/cart";

export const Dish = ({dishId} : {dishId: string}) => {
    const dish = useSelector((state: TState) => dishSlice.selectors.selectById(state, dishId));
    const amount = useSelector((state: TState) => selectProductAmountById(state, dishId));

    const dispatch = useDispatch();

    return (
        <div className={styles.root} key={dishId}>
            <div>
                <div className={styles.dishName}>{dish.name}</div>
                <div className={styles.ingredients}>({dish.ingredients.join(', ')})</div>
                <div className={styles.prices}>{dish.price} rub</div>
            </div>

            <div>
                <Counter
                    value={amount}
                    decrement={() => dispatch(decrement(dishId))}
                    increment={() => dispatch(increment(dishId))}/>

                <div className={styles.pricesCount}>{dish.price * amount} rub.</div>
            </div>
        </div>
    )
}
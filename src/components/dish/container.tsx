import {useDispatch, useSelector} from "react-redux";
import {TState} from "../../redux";
import {dishSlice} from "../../redux/entities/dishes";
import {decrement, increment, selectProductAmountById} from "../../redux/entities/cart";
import {Dish} from "./component.tsx";

export const DishContainer = ({dishId} : {dishId: string}) => {
    const dish = useSelector((state: TState) => dishSlice.selectors.selectById(state, dishId));
    const amount = useSelector((state: TState) => selectProductAmountById(state, dishId));

    const dispatch = useDispatch();

    if (!dish) {
        return null;
    }

    return (
        <Dish
            dish={dish}
            amount={amount}
            decrement={() => dispatch(decrement(dishId))}
            increment={() => dispatch(increment(dishId))}
        />
    )
}
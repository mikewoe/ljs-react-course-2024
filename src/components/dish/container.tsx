import {useDispatch, useSelector} from "react-redux";
import {TState} from "../../redux";
import {decrement, increment, selectProductAmountById} from "../../redux/entities/cart";
import {Dish} from "./component.tsx";
import {useGetDishesQuery} from "../../redux/services/api.ts";

export const DishContainer = ({dishId, restaurantId} : {dishId: string, restaurantId: string}) => {
    const amount = useSelector((state: TState) => selectProductAmountById(state, dishId));

    const {data: dish} = useGetDishesQuery(restaurantId, {
        selectFromResult: (result) => ({
            ...result,
            data: result.data.find(({id}: {id: string}) => id === dishId)
        }),
    });

    const dispatch = useDispatch();

    if (!dish) {
        return null;
    }

    return (
        <Dish
            dish={dish}
            amount={amount}
            decrement={() => dispatch(decrement({dishId: dish.id, restaurantId: restaurantId}))}
            increment={() => dispatch(increment({dishId: dish.id, restaurantId: restaurantId}))}
        />
    )
}
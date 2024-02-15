import {useSelector} from "react-redux";
import {TState} from "../../redux";
import {restaurantSlice} from "../../redux/entities/restaurants";
import {Restaurant} from "./component.tsx";

export const RestaurantContainer = ({restaurantId} : {restaurantId: string}) => {
    const restaurant = useSelector((state: TState) =>
        restaurantSlice.selectors.selectById(state, restaurantId));

    if (!restaurant) {
        return null;
    }

    return (
        <Restaurant restaurant={restaurant}/>
    )
}
import {Button} from "../button/component.tsx";
import {useSelector} from "react-redux";
import {restaurantSlice} from "../../redux/entities/restaurants";
import {TState} from "../../redux";

export const RestaurantTab = ({restaurantId, onChange, viewType} : {
    restaurantId: string,
    onChange: () => void,
    viewType: string
}) => {
    const restaurant = useSelector((state: TState) =>
        restaurantSlice.selectors.selectById(state, restaurantId));

    return <div key={restaurantId}>
        <Button
            viewType={viewType}
            onClick={onChange}
        >
            {restaurant.name}
        </Button>
    </div>
}
import {Button} from "../button/component.tsx";
import {TNRestaurant} from "../../types/types.ts";

export const RestaurantTab = ({restaurant, onChange, viewType} : {
    restaurant: TNRestaurant,
    onChange: () => void,
    viewType: string
}) => {

    return <div key={restaurant.id}>
        <Button
            viewType={viewType}
            onClick={onChange}
        >
            {restaurant.name}
        </Button>
    </div>
}
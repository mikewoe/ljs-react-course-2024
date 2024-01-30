import {Button} from "../button/component.tsx";
import {TRestaurant} from "../../types/types.ts";

export const RestaurantTab = ({restaurant, onChange, viewType} : {
    restaurant: TRestaurant,
    onChange: () => void,
    viewType: string
}) => {
    return <div key={restaurant.id}>
        <Button viewType={viewType}
                onClick={onChange}
        >
            {restaurant.name}
        </Button>
    </div>
}
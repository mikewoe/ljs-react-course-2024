import {Menu} from "./menu/component.tsx";
import {Reviews} from "./reviews/components.tsx";
import {TRestaurant} from "../../types/types.ts";

export const Restaurant = ({restaurant}: {restaurant: TRestaurant}) => {
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <Menu menu={restaurant.menu}/>
            <Reviews reviews={restaurant.reviews}/>
        </div>
    );
}
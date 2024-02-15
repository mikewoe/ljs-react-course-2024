import styles from "./styles.module.scss"
import {TNRestaurant} from "../../types/types.ts";
import {MenuContainer} from "../menu/container.tsx";
import {ReviewsContainer} from "../reviews/container.tsx";

export const Restaurant = ({restaurant} : {restaurant: TNRestaurant}) => {
    return (
        <div className={styles.root} key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <MenuContainer restaurantId={restaurant.id}/>
            <ReviewsContainer restaurantId={restaurant.id}/>
        </div>
    );
}
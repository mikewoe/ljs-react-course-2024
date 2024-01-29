import {Menu} from "../menu/component.tsx";
import {Reviews} from "../reviews/component.tsx";
import {TRestaurant} from "../../types/types.ts";
import styles from "./styles.module.scss"

export const Restaurant = ({restaurant}: {restaurant: TRestaurant}) => {
    return (
        <div className={styles.root}>
            <h2>{restaurant.name}</h2>
            <Menu menu={restaurant.menu}/>
            <Reviews reviews={restaurant.reviews}/>
        </div>
    );
}
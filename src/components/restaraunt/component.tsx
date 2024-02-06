import {Menu} from "../menu/component.tsx";
import {Reviews} from "../reviews/component.tsx";
import styles from "./styles.module.scss"
import {useSelector} from "react-redux";
import {TState} from "../../redux";
import {restaurantSlice} from "../../redux/entities/restaurants";

export const Restaurant = ({restaurantId} : {restaurantId: string}) => {
    const restaurant = useSelector((state: TState) =>
        restaurantSlice.selectors.selectById(state, restaurantId));

    return (
        <div className={styles.root} key={restaurantId}>
            <h2>{restaurant.name}</h2>
            <Menu dishIds={restaurant.dishIds}/>
            <Reviews reviewIds={restaurant.reviewIds}/>
        </div>
    );
}
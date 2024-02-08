import {Restaurant} from "../restaraunt/component.tsx";
import styles from "./styles.module.scss"
import {useState} from "react";
import {RestaurantsTabPanel} from "../restaurants-tab-panel/component.tsx";
import {useSelector} from "react-redux";
import {restaurantSlice} from "../../redux/entities/restaurants";

export const RestaurantsView = () => {
    const restaurantIds = useSelector(restaurantSlice.selectors.selectIds)
    const [currentRestaurantId, setCurrentRestaurantId] = useState(restaurantIds[0]);

    return (
        <div className={styles.root}>
            <h1>Рестораны</h1>

            <div className={styles.restaurantsPanel}>
                <RestaurantsTabPanel
                    restaurantIds={restaurantIds}
                    selected={currentRestaurantId}
                    onSelect={setCurrentRestaurantId}/>

                <div className={styles.selectedView}>
                    {currentRestaurantId && <Restaurant key={currentRestaurantId} restaurantId={currentRestaurantId}/>}
                </div>
            </div>
        </div>
    )
}
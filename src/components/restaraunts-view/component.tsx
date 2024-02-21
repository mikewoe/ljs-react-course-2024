import styles from "./styles.module.scss"
import {useState} from "react";
import {RestaurantsTabPanel} from "../restaurants-tab-panel/component.tsx";
import {RestaurantContainer} from "../restaraunt/container.tsx";
import {useGetRestaurantsQuery} from "../../redux/services/api.ts";

export const RestaurantsView = () => {
    const {data: restaurants} = useGetRestaurantsQuery(undefined);
    const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0]);

    return (
        <div className={styles.root}>
            <h1>Рестораны</h1>

            <div className={styles.restaurantsPanel}>
                <RestaurantsTabPanel
                    restaurants={restaurants}
                    selected={currentRestaurant}
                    onSelect={setCurrentRestaurant}/>

                <div className={styles.selectedView}>
                    {currentRestaurant &&
                        <RestaurantContainer key={currentRestaurant.id} restaurantId={currentRestaurant.id}/>
                    }
                </div>
            </div>
        </div>
    )
}
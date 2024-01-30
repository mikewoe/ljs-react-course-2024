import {Restaurant} from "../restaraunt/component.tsx";
import {TRestaurant} from "../../types/types.ts";
import styles from "./styles.module.scss"
import {useState} from "react";
import {RestaurantsTabPanel} from "../restaurants-tab-panel/component.tsx";

export const RestaurantsView = ({restaurants}: {restaurants: TRestaurant[]}) => {
    const [selected, setSelected] = useState(0);

    return (
        <div className={styles.root}>
            <h1>Рестораны</h1>

            <div className={styles.restaurantsPanel}>
                <RestaurantsTabPanel restaurants={restaurants} selected={selected} setSelected={setSelected}/>

                <div className={styles.selectedView}>
                    {restaurants[selected] && <Restaurant key={restaurants[selected].id} restaurant={restaurants[selected]}/>}
                </div>
            </div>
        </div>
    )
}
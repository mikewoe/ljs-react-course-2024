import {Restaurant} from "../restaraunt/component.tsx";
import {TRestaurant} from "../../types/types.ts";
import styles from "./styles.module.scss"
import {useState} from "react";
import {Button} from "../button/component.tsx";
import {ButtonViewType} from "../button/constants.ts";

export const Restaurants = ({restaurants}: {restaurants: TRestaurant[]}) => {
    const [selected, setSelected] = useState(0);

    return (
        <div className={styles.root}>
            <h1>Рестораны</h1>

            <div className={styles.restaurantsPanel}>
                <div className={styles.restaurantsList}>
                    {restaurants.map((restaurant, index) =>
                        <div key={restaurant.id}>
                            <Button viewType={index === selected ? ButtonViewType.primary : ButtonViewType.secondary}
                                    onClick={() => setSelected(index)}
                            >
                                {restaurant.name}
                            </Button>
                        </div>
                    )}
                </div>

                <div className={styles.selectedView}>
                    {restaurants[selected] && <Restaurant key={restaurants[selected].id} restaurant={restaurants[selected]}/>}
                </div>
            </div>
        </div>
    )
}
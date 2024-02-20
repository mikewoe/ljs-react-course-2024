import styles from "../restaraunts-view/styles.module.scss";
import {RestaurantTab} from "../restaurant-tab/component.tsx";
import {ButtonViewType} from "../button/constants.ts";
import React from "react";
import {TNRestaurant} from "../../types/types.ts";

export const RestaurantsTabPanel = ({restaurants, selected, onSelect} : {
    restaurants: TNRestaurant[],
    selected: string,
    onSelect: React.Dispatch<React.SetStateAction<string>>
}) => {
    return <div className={styles.restaurantsList}>
        {restaurants.map((restaurant) =>
            <RestaurantTab
                key={restaurant.id}
                viewType={restaurant.id === selected ? ButtonViewType.primary : ButtonViewType.secondary}
                restaurant={restaurant}
                onChange={() => onSelect(restaurant.id)}/>
        )}
    </div>
}
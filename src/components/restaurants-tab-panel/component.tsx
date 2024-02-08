import styles from "../restaraunts-view/styles.module.scss";
import {RestaurantTab} from "../restaurant-tab/component.tsx";
import {ButtonViewType} from "../button/constants.ts";
import React from "react";

export const RestaurantsTabPanel = ({restaurantIds, selected, onSelect} : {
    restaurantIds: string[],
    selected: string,
    onSelect: React.Dispatch<React.SetStateAction<string>>
}) => {
    return <div className={styles.restaurantsList}>
        {restaurantIds.map((restaurantId) =>
            <RestaurantTab
                key={restaurantId}
                viewType={restaurantId === selected ? ButtonViewType.primary : ButtonViewType.secondary}
                restaurantId={restaurantId}
                onChange={() => onSelect(restaurantId)}/>
        )}
    </div>
}
import styles from "../restaraunts-view/styles.module.scss";
import {RestaurantTab} from "../restaurant-tab/component.tsx";
import {ButtonViewType} from "../button/constants.ts";
import {TRestaurant} from "../../types/types.ts";

export const RestaurantsTabPanel = ({restaurants, selected, setSelected} : {
    restaurants: TRestaurant[],
    selected: number,
    setSelected: (index:number) => void
}) => {
    return <div className={styles.restaurantsList}>
        {restaurants.map((restaurant, index) =>
            <RestaurantTab
                viewType={index === selected ? ButtonViewType.primary : ButtonViewType.secondary}
                restaurant={restaurant}
                onChange={() => setSelected(index)}/>
        )}
    </div>
}
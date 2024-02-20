import styles from './styles.module.scss'
import {DishContainer} from "../dish/container.tsx";
import {TNDish} from "../../types/types.ts";

export const Menu = ({dishes, isLoading, restaurantId}: {dishes: TNDish[], isLoading: boolean, restaurantId: string}) => {
    return (
        <div className={styles.root}>
            <h3>Меню</h3>

            { isLoading ? <div>Loading...</div> :
                <div>
                    {dishes.map(dish => (
                        <DishContainer key={dish.id} dishId={dish.id} restaurantId={restaurantId}/>
                    ))}
                </div>
            }

        </div>
    );
}
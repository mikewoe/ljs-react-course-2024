import styles from './styles.module.scss'
import {DishContainer} from "../dish/container.tsx";

export const Menu = ({dishIds, isLoading}: {dishIds: string[], isLoading: boolean}) => {
    return (
        <div className={styles.root}>
            <h3>Меню</h3>

            { isLoading ? <div>Loading...</div> :
                <div>
                    {dishIds.map(dishId => (
                        <DishContainer key={dishId} dishId={dishId}/>
                    ))}
                </div>
            }

        </div>
    );
}
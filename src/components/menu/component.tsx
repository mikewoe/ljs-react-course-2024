import {Dish} from "../dish/component.tsx";
import styles from './styles.module.scss'

export const Menu = ({dishIds}: {dishIds: string[]}) => {
    return (
        <div className={styles.root}>
            <h3>Меню</h3>

            <div>
                {dishIds.map(dishId => (
                    <Dish dishId={dishId}/>
                ))}
            </div>
        </div>
    );
}
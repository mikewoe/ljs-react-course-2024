import {TDish} from "../../types/types.ts";
import {Dish} from "../dish/component.tsx";
import styles from './styles.module.scss'

export const Menu = ({menu}: {menu: TDish[]}) => {
    return (
        <div className={styles.root}>
            <h3>Меню</h3>

            <div>
                {menu.map(dish => (
                    <Dish dish={dish}/>
                ))}
            </div>
        </div>
    );
}
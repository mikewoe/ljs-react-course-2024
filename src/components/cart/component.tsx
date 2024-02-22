import styles from './styles.module.scss';
import {DishContainer} from "../dish/container.tsx";
import {TDishInfo} from "../../redux/entities/cart";

export const Cart = ({products}: {
    products: TDishInfo[]
}) => {
    return (
        <div className={styles.root}>
            {products?.length ? products.map(product =>
                <DishContainer key={product.id} dishId={product.id} restaurantId={product.restaurantId}/>) : "Empty"}
        </div>
    );
}
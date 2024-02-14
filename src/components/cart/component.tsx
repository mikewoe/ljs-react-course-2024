import {Dish} from "../dish/component.tsx";
import styles from './styles.module.scss';

export const Cart = ({productIds}: {
    productIds: string[]
}) => {
    return (
        <div className={styles.root}>
            {productIds?.length ? productIds.map(productId => <Dish dishId={productId}/>) : "Empty"}
        </div>
    );
}
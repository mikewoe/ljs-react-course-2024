import styles from './styles.module.scss';
import {DishContainer} from "../dish/container.tsx";

export const Cart = ({productIds}: {
    productIds: string[]
}) => {
    return (
        <div className={styles.root}>
            {productIds?.length ? productIds.map(productId => <DishContainer key={productId} dishId={productId}/>) : "Empty"}
        </div>
    );
}
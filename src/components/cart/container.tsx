import {useSelector} from "react-redux";
import {selectCartProductIds} from "../../redux/entities/cart";
import {Cart} from "./component.tsx";

export const CartContainer = () => {
    const productIds = useSelector(selectCartProductIds);

    return (
        <Cart productIds={productIds}/>
    )
}
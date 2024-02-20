import {useSelector} from "react-redux";
import {selectCartProducts} from "../../redux/entities/cart";
import {Cart} from "./component.tsx";

export const CartContainer = () => {
    const products = useSelector(selectCartProducts);

    return (
        <Cart products={products}/>
    )
}
import {useSelector} from "react-redux";
import {TState} from "../../redux";
import {selectProductAmount} from "../../redux/entities/cart";
import {CartButton} from "./component.tsx";

export const CartButtonContainer = () => {
    const amount = useSelector((state: TState) => selectProductAmount(state));

    return <CartButton amount={amount}/>
}
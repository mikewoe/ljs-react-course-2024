import {Button} from "../button/component.tsx";
import {useRef, useState} from "react";
import {createPortal} from "react-dom";
import {CartContainer} from "../cart/container.tsx";
import styles from './styles.module.scss';

export const CartButton = ({amount}: {
    amount: number
}) => {
    const [coordinates, setCoordinates] = useState(null);
    const buttonRef = useRef();


    const toggleCartModal = () => {
        if (coordinates) {
            setCoordinates(null);

            return;
        }

        // eslint-disable-next-line no-unsafe-optional-chaining
        // @ts-ignore
        const {bottom, right} = buttonRef.current.getBoundingClientRect();

        // @ts-ignore
        setCoordinates({right: `calc(100% - ${right}px)`, top: bottom + 5});
    }

    return (
        <div className={styles.root}>
            <Button ref={buttonRef} onClick={toggleCartModal}>Cart: {amount}</Button>

            {coordinates && createPortal(
                <div style={coordinates} className={styles.modal}>
                    <CartContainer/>
                </div>,
                document.getElementById("popup-container") || document.body
            )}
        </div>
    )
}
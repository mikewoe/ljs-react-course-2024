import {Button} from "../button/component.tsx";
import styles from "./styles.module.scss"

export const Counter = ({value, max = 5, min = 0, decrement, increment}: {
    value: number,
    max?: number,
    min?: number,
    decrement: () => void,
    increment: () => void,
}) => {
    return (
        <div className={styles.buttonsGroup}>
            <Button
                className={styles.counter}
                disabled={value <= min}
                onClick={decrement}
            >
                -
            </Button>

            {value}

            <Button
                className={styles.counter}
                disabled={value >= max}
                onClick={increment}
            >
                +
            </Button>
        </div>
    )
}
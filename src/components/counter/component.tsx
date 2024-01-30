import {Button} from "../button/component.tsx";
import React from "react";
import styles from "./styles.module.scss"

export const Counter = ({value, onChange, max = 5, min = 0}: {
    value: number,
    onChange: React.Dispatch<React.SetStateAction<number>>,
    max?: number,
    min?: number
}) => {
    return (
        <div className={styles.buttonsGroup}>
            <Button
                className={styles.counter}
                disabled={value <= min}
                onClick={() => onChange(value - 1)}
            >
                -
            </Button>

            {value}

            <Button
                className={styles.counter}
                disabled={value >= max}
                onClick={() => onChange(value + 1)}
            >
                +
            </Button>
        </div>
    )
}
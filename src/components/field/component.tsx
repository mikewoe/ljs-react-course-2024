import styles from './styles.module.scss';
import React from "react";

export const Field = ({
    fieldName,
    labelName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1),
    type = "text",
    min = 1,
    max = 5,
    value,
    onChange
} : {
    fieldName: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => any,
    labelName?: string,
    type?: string,
    min?: number,
    max?: number,
    value?: string | number | readonly string[] | undefined
}) => {
    return <div className={styles.field}>
        <label htmlFor={fieldName}>{labelName}</label>
        <input
            id={fieldName}
            type={type}
            min={type === 'number' ? min : undefined}
            max={type === 'number' ? max : undefined}
            value={value}
            onChange={onChange}
        ></input>
    </div>
}
import {forwardRef, MouseEventHandler, ReactNode} from "react";
import classNames from "classnames";
import {Size} from "../../constants/sizes.ts";
import {ButtonViewType} from "./constants.ts";
import styles from "./styles.module.scss"

const SizeClass = {
    [Size.xs] : styles.xs,
    [Size.s] : styles.s,
    [Size.m] : styles.m,
    [Size.l] : styles.l,
    [Size.xl] : styles.xl,
}

export const Button = forwardRef(function Button ({onClick, children, className, size = Size.m, viewType = ButtonViewType.primary, disabled = false}: {
    onClick: MouseEventHandler<HTMLButtonElement>,
    children?: ReactNode,
    className?: string,
    size?: string,
    viewType?: string,
    disabled?: boolean,
}, ref) {
    return (
        <button
            className={classNames(
                styles.root,
                className,
                SizeClass[size] || SizeClass[Size.m],
                styles[viewType]
            )}
            disabled={disabled}
            onClick={onClick}
            ref={ref}
        >
            {children}
        </button>
    );
});
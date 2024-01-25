import {MouseEventHandler, ReactNode} from "react";

export const Button = ({onClick, children}: {
    onClick: MouseEventHandler<HTMLButtonElement>,
    children?: ReactNode
}) => {
    return (
        <button onClick={onClick}>{children}</button>
    );
}
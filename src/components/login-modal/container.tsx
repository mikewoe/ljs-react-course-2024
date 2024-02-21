import {useContext} from "react";
import {UserContext} from "../../contexts/user.tsx";
import {LoginModal} from "./component.tsx";

export const LoginContainer = ({onClose}: {
    onClose: () => void,
}) => {
    const {login} = useContext(UserContext);

    return (
        <LoginModal onClose={onClose} onSubmit={login}/>
    )
}
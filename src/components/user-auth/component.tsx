import {Button} from "../button/component.tsx";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.tsx";
import classNames from "classnames";

export const UserAuth = ({className} : {
    className: string
}) => {
    const {user, login, logout} = useContext(UserContext);

    console.log(user);

    if (!user.isAuth) {
        return (
            <div>
                <Button className={classNames(className)} onClick={() => console.log('Open signIn')}>SignIn</Button>

                <Button
                    className={classNames(className)}
                    onClick={() => login({
                        userName: 'user',
                        mail: 'user@mail.domain',
                        isAuth: true
                    })}
                >
                    Login
                </Button>
            </div>
        )
    }

    return (
        <div>
            {user.userName}

            <Button
                className={classNames(className)}
                onClick={logout}
            >
                Logout
            </Button>
        </div>
    )
}
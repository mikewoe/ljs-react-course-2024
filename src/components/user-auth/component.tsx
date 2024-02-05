import {Button} from "../button/component.tsx";
import {useContext, useState} from "react";
import {UserContext} from "../../contexts/user.tsx";
import classNames from "classnames";
import {createPortal} from "react-dom";
import {LoginModal} from "../login-modal/component.tsx";

export const UserAuth = ({className} : {
    className: string
}) => {
    const {user, logout} = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);

    if (user.isAuth) {
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

    return (
        <div>
            <Button className={classNames(className)} onClick={() => console.log('Open signIn')}>SignIn</Button>

            <Button
                className={classNames(className)}
                onClick={() => setShowModal(true)}
            >
                Login
            </Button>

            {showModal && createPortal(
                <LoginModal
                    onClose={() => setShowModal(false)}
                />,
                document.body
            )}
        </div>
    )
}
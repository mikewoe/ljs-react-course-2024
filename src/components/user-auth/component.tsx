import {Button} from "../button/component.tsx";
import {useContext, useEffect, useRef, useState} from "react";
import {UserContext} from "../../contexts/user.tsx";
import classNames from "classnames";
import {createPortal} from "react-dom";
import {LoginContainer} from "../login-modal/container.tsx";

export const UserAuth = ({className} : {
    className: string
}) => {
    const {user, logout} = useContext(UserContext);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const modalContainer = useRef();

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        modalContainer.current = document.getElementById('modal-container');
    }, []);

    if (user.isAuth) {
        return (
            <div>
                <span>{user.userName}</span>

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
            <Button
                className={classNames(className)}
                onClick={() => console.log('Open signIn')}
            >
                SignIn
            </Button>

            <Button
                className={classNames(className)}
                onClick={() => setShowLoginModal(true)}
            >
                Login
            </Button>

            {showLoginModal && modalContainer.current && createPortal(
                <LoginContainer
                    onClose={() => setShowLoginModal(false)}
                />,
                modalContainer.current
            )}
        </div>
    )
}
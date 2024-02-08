import {Button} from "../button/component.tsx";
import {useContext, useEffect, useRef, useState} from "react";
import {UserContext} from "../../contexts/user.tsx";
import classNames from "classnames";
import {createPortal} from "react-dom";
import {LoginModal} from "../login-modal/component.tsx";

export const UserAuth = ({className} : {
    className: string
}) => {
    const {user, logout} = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);
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
            <Button className={classNames(className)} onClick={() => console.log('Open signIn')}>SignIn</Button>

            <Button
                className={classNames(className)}
                onClick={() => setShowModal(true)}
            >
                Login
            </Button>

            {showModal && modalContainer.current && createPortal(
                <LoginModal
                    onClose={() => setShowModal(false)}
                />,
                modalContainer.current
            )}
        </div>
    )
}
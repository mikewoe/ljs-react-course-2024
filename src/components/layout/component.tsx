import {Header} from "../header/component.tsx";
import {Footer} from "../footer/component.tsx";
import {ReactNode, useCallback, useContext, useState} from "react";
import styles from "./styles.module.scss"
import {EMPTY_LOGIN, TUserCreds, UserContext} from "../../contexts/user.tsx";

export const Layout = ({children}: {children: ReactNode}) => {
    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(user);

    const login = useCallback((user: TUserCreds) => setCurrentUser(user), []);
    const logout = useCallback(() => setCurrentUser(EMPTY_LOGIN), []);

    console.log('currentUser: ', currentUser);

    return (
        <UserContext.Provider value={{user: currentUser, login, logout}}>
            <div className={styles.root}>
                <Header />
                <div>{children}</div>
                <Footer/>
            </div>
        </UserContext.Provider>
    );
}
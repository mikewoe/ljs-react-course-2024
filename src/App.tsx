import {restaurants} from "./constants/mock.ts";
import {Layout} from "./components/layout/component.tsx";
import {RestaurantsView} from "./components/restaraunts-view/component.tsx";
import {useCallback, useContext, useState} from "react";
import {EMPTY_LOGIN, TUserCreds, UserContext} from "./contexts/user.tsx";

export const App = () => {
    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(user);

    const login = useCallback((user: TUserCreds) => setCurrentUser(user), []);
    const logout = useCallback(() => setCurrentUser(EMPTY_LOGIN), []);

    return (
        <UserContext.Provider value={{user: currentUser, login, logout}}>

            <Layout>
                <RestaurantsView restaurants={restaurants}/>
            </Layout>
        </UserContext.Provider>
    )
}
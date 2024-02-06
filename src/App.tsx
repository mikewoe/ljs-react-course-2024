import {Layout} from "./components/layout/component.tsx";
import {RestaurantsView} from "./components/restaraunts-view/component.tsx";
import {useCallback, useContext, useState} from "react";
import {EMPTY_LOGIN, TUserCreds, UserContext} from "./contexts/user.tsx";
import {Provider} from "react-redux";
import {store} from "./redux";

export const App = () => {
    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(user);

    const login = useCallback((user: TUserCreds) => setCurrentUser(user), []);
    const logout = useCallback(() => setCurrentUser(EMPTY_LOGIN), []);

    return (
        <Provider store={store}>
            <UserContext.Provider value={{user: currentUser, login, logout}}>
                <Layout>
                    <RestaurantsView/>
                </Layout>
            </UserContext.Provider>
        </Provider>
    )
}
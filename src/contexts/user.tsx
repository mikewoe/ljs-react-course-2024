import React from "react";

export const EMPTY_LOGIN = {
    userName: '',
    mail: '',
    isAuth: false
}

export type TUserCreds = typeof EMPTY_LOGIN

const LOGIN_API = {
    login: (userCreds:TUserCreds) => {console.log(userCreds)},
    logout: () => {}
}

export const UserContext = React.createContext(
    {user: {...EMPTY_LOGIN}, ...LOGIN_API}
);
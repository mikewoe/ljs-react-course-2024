import React from "react";

export const EMPTY_LOGIN = {
    userName: '',
    mail: '',
    isAuth: false
}

export type TUserCreds = typeof EMPTY_LOGIN

const LOGIN_API = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    login: (userCreds:TUserCreds) => {},
    logout: () => {}
}

export const UserContext = React.createContext(
    {user: {...EMPTY_LOGIN}, ...LOGIN_API}
);
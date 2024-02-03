import {EMPTY_LOGIN} from "../../contexts/user.tsx";
import React, {useCallback, useReducer} from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {isAuth, ...userCred} = {...EMPTY_LOGIN};

const mailRegex = /^\w+@\w+\.\w+$/;

const reducer = (state : {userName: string, mail: string},
                 action: {type: string, payload: string}) => {
    switch (action.type) {
        case 'setUserName': return {...state, userName: action.payload};
        case 'setMail': return {
            ...state,
            mail: action.payload,
        };
        default: return state;
    }
}

export const useLoginForm = (initialValue = userCred) => {
    const [form, dispatch] = useReducer(reducer, initialValue);

    const setUserName = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({type: 'setUserName', payload: event.target.value}),
        []
    );

    const setMail = useCallback((event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({type: 'setMail', payload: event.target.value}),
        []
    );

    const isFormValidated = useCallback(() => !!form.userName && !!form.mail && !!form.mail.match(mailRegex), [form])

    return {form, setUserName, setMail, isFormValidated}
}
import React, {useCallback, useReducer} from "react";

const INITIAL_VALUE = {
    name: '',
    text: '',
    rating: 1
}

const reducer = (state : {name: string, text: string, rating: number}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case 'setName':
            return {
                ...INITIAL_VALUE,
                name: action.payload
            };
        case 'setText':
            return {
                ...state,
                text: action.payload
            };
        case 'setRating':
            return {
                ...state,
                rating: action.payload
            };
        default:
            return state;
    }
}

export const useReviewForm = (initialValue = INITIAL_VALUE) => {
    const [form, dispatch] = useReducer(reducer, initialValue);

    const setName = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({type: 'setName', payload: event.target.value})
        },
        []
    );

    const setText = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({type: 'setText', payload: event.target.value})
        },
        []
    );

    const setRating = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>{
            dispatch({type: 'setRating', payload: event.target.value})
        },
        []
    );

    return {
        form, setName, setText, setRating
    };
};
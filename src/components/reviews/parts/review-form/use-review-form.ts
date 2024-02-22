import React, {useCallback, useReducer} from "react";

const INITIAL_VALUE = {
    name: '',
    text: '',
    rating: 5
}

const reducer = (state : {text: string, rating: number}, action: {type: string, payload?: any}) => {
    switch (action.type) {
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
        case 'reset':
            return {
                ...INITIAL_VALUE
            }
        default:
            return state;
    }
}

export const useReviewForm = (initialValue = INITIAL_VALUE) => {
    const [form, dispatch] = useReducer(reducer, initialValue);

    const setText = useCallback(
        (value: string) => {
            dispatch({type: 'setText', payload: value})
        },
        []
    );

    const setRating = useCallback(
        (value: number) =>{
            dispatch({type: 'setRating', payload: value})
        },
        []
    );

    const reset = useCallback(() => dispatch({type: 'reset'}), []);

    const isFormValidated = useCallback(() => !!form.text && !!form.rating, [form]);

    return {
        form, setText, setRating, isFormValidated, reset
    };
};
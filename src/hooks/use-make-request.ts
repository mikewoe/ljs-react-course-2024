import {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestSlice} from "../redux/entities/requests";

export const useMakeRequest = (thunk) => {
    const [request, setRequest] = useState(null);

    const requestStatus = useSelector((state) => requestSlice.selectors.selectStatus(state, request.requestId));

    const dispatch = useDispatch();

    const makeRequest = useCallback(
        (...params) => {
            setRequest(dispatch((thunk(...params))));
        }, [dispatch, thunk]);

    return [requestStatus, makeRequest];
}
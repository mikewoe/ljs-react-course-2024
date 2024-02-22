import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestSlice} from "../redux/entities/requests";

export const useRequest = (thunk, ...params) : [requestStatus: string] => {
    const [request, setRequest] = useState(null);

    const requestStatus = useSelector((state) =>
        request && requestSlice.selectors.selectStatus(state, request.requestId)
    );

    const dispatch = useDispatch();

    useEffect(() => {
        const request = dispatch(thunk(...params));

        setRequest(request);

        return () => {
            request.abort();

            setRequest(null);
        }
    }, [...params, thunk]);

    return [requestStatus];
}
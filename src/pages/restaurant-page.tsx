import {Layout} from "../components/layout/component.tsx";
import {RestaurantsView} from "../components/restaraunts-view/component.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getRestaurants} from "../redux/entities/restaurants/thunks/get-restaurants.ts";
import {requestSlice} from "../redux/entities/requests";
import {getUsers} from "../redux/entities/users/thunks/get-users.ts";

export const RestaurantPage = () => {
    const [requestId, setRequestId] = useState();
    const isRestaurantsLoading = useSelector((state) =>
        requestId && requestSlice.selectors.selectIsLoading(state, requestId))

    const dispatch = useDispatch();

    useEffect(() => {
        setRequestId(dispatch(getRestaurants()).requestId);
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <Layout>
            { isRestaurantsLoading ? <div>Loading...</div> : <RestaurantsView/>}
        </Layout>
    )
}
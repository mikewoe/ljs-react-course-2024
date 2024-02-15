import {useDispatch, useSelector} from "react-redux";
import {restaurantSlice} from "../../redux/entities/restaurants";
import {useEffect, useState} from "react";
import {requestSlice} from "../../redux/entities/requests";
import {getDishesByRestaurantId} from "../../redux/entities/dishes/thunks/get-dishes-by-restaurant-id.ts";
import {Menu} from "./component.tsx";

export const MenuContainer = ({restaurantId}: {restaurantId: string}) => {
    const dishIds: string[] = useSelector((state) => restaurantSlice.selectors.selectMenuById(state, restaurantId));
    const [requestId, setRequestId] = useState(null);
    const isLoading = useSelector((state) =>
        requestId && requestSlice.selectors.selectIsLoading(state, requestId) || false);

    const dispatch = useDispatch();

    useEffect(() => {
        setRequestId(dispatch(getDishesByRestaurantId(restaurantId)).requestId);
    }, [dispatch, restaurantId]);

    if (!dishIds?.length) {
        return null;
    }

    return (
        <Menu dishIds={dishIds} isLoading={isLoading}/>
    )
}
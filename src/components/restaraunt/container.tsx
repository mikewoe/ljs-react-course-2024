import {Restaurant} from "./component.tsx";
import {useGetRestaurantsQuery} from "../../redux/services/api.ts";

export const RestaurantContainer = ({restaurantId} : {restaurantId: string}) => {
    const {data: restaurant} = useGetRestaurantsQuery( undefined, {
        selectFromResult: (result) => ({
            ...result,
            data: result.data.find(({id}: {id: string}) => restaurantId === id)
        }),
    });

    if (!restaurant) {
        return null;
    }

    return (
        <Restaurant restaurant={restaurant}/>
    )
}
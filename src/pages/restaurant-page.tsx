import {Layout} from "../components/layout/component.tsx";
import {RestaurantsView} from "../components/restaraunts-view/component.tsx";
import {getRestaurants} from "../redux/entities/restaurants/thunks/get-restaurants.ts";
import {useRequest} from "../hooks/use-request.ts";
import {REQUEST_STATUS} from "../redux/entities/requests/constants.ts";
import {getUsers} from "../redux/entities/users/thunks/get-users.ts";

export const RestaurantPage = () => {
    const [requestStatus] = useRequest(getRestaurants);

    useRequest(getUsers);

    return (
        <Layout>
            { requestStatus === REQUEST_STATUS.pending ? <div>Loading...</div> : <RestaurantsView/>}
        </Layout>
    )
}
import {Layout} from "../components/layout/component.tsx";
import {RestaurantsView} from "../components/restaraunts-view/component.tsx";
import {useGetRestaurantsQuery, useGetUsersQuery} from "../redux/services/api.ts";

export const RestaurantPage = () => {
    const {isLoading} = useGetRestaurantsQuery(undefined);

    // useGetUsersQuery(undefined);

    return (
        <Layout>
            { isLoading ? <div>Loading...</div> : <RestaurantsView/>}
        </Layout>
    )
}
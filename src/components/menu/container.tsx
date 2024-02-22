import {Menu} from "./component.tsx";
import {useGetDishesQuery} from "../../redux/services/api.ts";

export const MenuContainer = ({restaurantId}: {restaurantId: string}) => {
    const {data: dishes, isLoading} = useGetDishesQuery(restaurantId);

    if (!dishes?.length) {
        return null;
    }

    return (
        <Menu dishes={dishes} isLoading={isLoading} restaurantId={restaurantId}/>
    )
}
import {restaurants} from "./constants/mock.ts";
import {Layout} from "./components/layout/component.tsx";
import {RestaurantsView} from "./components/restaraunts-view/component.tsx";

export const App = () => {
    return (
        <Layout>
            <RestaurantsView restaurants={restaurants}/>
        </Layout>
    )
}
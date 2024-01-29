import {restaurants} from "./constants/mock.ts";
import {Layout} from "./components/layout/component.tsx";
import {Restaurants} from "./components/restaraunts/component.tsx";

export const App = () => {
    return (
        <Layout>
            <Restaurants restaurants={restaurants}/>
        </Layout>
    )
}
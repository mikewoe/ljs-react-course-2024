import {restaurants} from "./constants/mock.ts";
import {Layout} from "./components/layout/component.tsx";
import {Restaurant} from "./components/restaraunt/component.tsx";

export const App = () => {
    return (
        <Layout>
            <h1>Рестораны</h1>

            {restaurants.map(restaurant => <Restaurant restaurant={restaurant}/>)}
        </Layout>
    )
}
import {TMenu} from "../../../types/types.ts";

export const Menu = ({menu}: {menu: TMenu[]}) => {
    return (
        <div>
            <h3>Меню</h3>

            <ul>
                {menu.map(menu => (
                    <li>{`${menu.name} (${menu.ingredients.join(', ')}) - ${menu.price} rub.`}</li>
                ))}
            </ul>
        </div>
    );
}
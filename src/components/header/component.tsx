import classNames from "classnames";
import styles from './styles.module.scss'
import {Button} from "../button/component.tsx";
import {UserAuth} from "../user-auth/component.tsx";
import {CartButtonContainer} from "../cart-button/container.tsx";

export const Header = ({isHighlighted = false}: {isHighlighted?: boolean}) => {
    return (
        <header className={classNames(styles.root, styles.header, {
            [styles.highlighted]: isHighlighted
        })}>
            <div>
                <Button className={styles.navigation} onClick={() => console.log('Open menu')}>
                    <span>Menu</span>
                </Button>
            </div>

            <div className={styles.userMenu}>
                <CartButtonContainer/>
                <UserAuth className={styles.navigation}/>
            </div>
        </header>
    );
}
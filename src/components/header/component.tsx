import classNames from "classnames";
import styles from './styles.module.scss'
import {Button} from "../button/component.tsx";

export const Header = ({isHighlighted = false}: {isHighlighted?: boolean}) => {
    return (
        <header className={classNames(styles.root, styles.header, {
            [styles.highlighted]: isHighlighted
        })}>
            Header

            <Button className={styles.navigation} onClick={() => console.log('Open menu')}>
                <span>Menu</span>
            </Button>

            <Button className={styles.navigation} onClick={() => console.log('Open signIn')}>SignIn</Button>
        </header>
    );
}
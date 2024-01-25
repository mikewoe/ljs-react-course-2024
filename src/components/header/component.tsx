import classNames from "classnames";
import styles from './styles.module.scss'
import {Button} from "../button/component.tsx";

export const Header = ({isHighlighted}: {isHighlighted?: boolean}) => {
    return (
        <header className={classNames(styles.root, styles.header, {
            [styles.highlighted]: isHighlighted
        })}>
            Header

            <Button onClick={() => console.log('Open menu')}>
                <span>Menu</span>
            </Button>

            <Button onClick={() => console.log('Open signIn')}>SignIn</Button>
        </header>
    );
}
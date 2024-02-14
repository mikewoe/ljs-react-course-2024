import {Header} from "../header/component.tsx";
import {Footer} from "../footer/component.tsx";
import {ReactNode} from "react";
import styles from "./styles.module.scss"

export const Layout = ({children}: {children: ReactNode}) => {
    return (
            <div>
                <div className={styles.root}>
                    <Header />
                    <div>{children}</div>
                    <Footer/>
                </div>

                <div id="modal-container"/>
                <div id="popup-container" className={styles.popoverContainer}/>
            </div>
    );
}
import {Header} from "../header/component.tsx";
import {Footer} from "../footer/component.tsx";
import {ReactNode} from "react";

export const Layout = ({children}: {children: ReactNode}) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer/>
        </div>
    );
}
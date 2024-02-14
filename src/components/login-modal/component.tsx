import {Button} from "../button/component.tsx";
import styles from './styles.module.scss'
import {ButtonViewType} from "../button/constants.ts";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.tsx";
import {Field} from "../field/component.tsx";
import {useLoginForm} from "./use-login-form.ts";

export const LoginModal = ({onClose}: {
    onClose: () => void,
}) => {
    const {login} = useContext(UserContext);
    const {form, setUserName, setMail, isFormValidated} = useLoginForm();

    return (
        <div>
            <div onClick={onClose} className={styles.overlay}/>
            <div className={styles.root}>
                <div className={styles.form}>
                    <Field
                        fieldName="userName"
                        labelName="Имя пользователя"
                        onChange={setUserName}
                        value={form.userName}
                    />

                    <Field
                        fieldName="mail"
                        type="Адрес электронной почты"
                        onChange={setMail}
                        value={form.mail}/>
                </div>

                <div className={styles.buttonGroup}>
                    <Button viewType={ButtonViewType.secondary} onClick={onClose}>Close</Button>
                    <Button disabled={!isFormValidated()} onClick={() => {
                        login({...form, isAuth: true});

                        onClose();
                    }}>LogIn</Button>
                </div>
            </div>
        </div>
    )
}
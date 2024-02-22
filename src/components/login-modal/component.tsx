import {Button} from "../button/component.tsx";
import styles from './styles.module.scss'
import {ButtonViewType} from "../button/constants.ts";
import {Field} from "../field/component.tsx";
import {useLoginForm} from "./use-login-form.ts";
import {TUserCreds} from "../../contexts/user.tsx";

export const LoginModal = ({onClose, onSubmit}: {
    onClose: () => void,
    onSubmit: (userCreds:TUserCreds) => void
}) => {
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
                        // onSubmit({...form, isAuth: true, userId: crypto.randomUUID()});
                        onSubmit({
                            userName: 'Sam',
                            mail: 'sam@mail.ru',
                            isAuth: true,
                            userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54"
                        });

                        onClose();
                    }}>LogIn</Button>
                </div>
            </div>
        </div>
    )
}
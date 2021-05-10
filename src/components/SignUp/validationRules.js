import * as Yup from 'yup';

const emailValidationRule = Yup.string()
    .required("Пожалуйста укажите вашу почту.")
    .email("Не верный формат email.");

const passwordValidationRule = Yup.string()
    .required("Пожалуйста введите пароль.")
    .test(
        "passwordValidation",
        "Пароль должен состоять из латинских символов, содержать минимум 1 прописную букву, 1 строчную букву, 1 цифру.",
        function passwordValidation() {
            const password = this.parent.password;
            return (new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")).test(password);
        }
    );

const confirmPasswordValidationRule = Yup.string()
    .required("Пожалуйста повторите пароль.")
    .test(
        "confirmPasswordValidation",
        "Пароли не совпадают.",
        function passwordValidation() {
            const password = this.parent.password;
            const confirmPassword = this.parent.confirmPassword;
            return password === confirmPassword;
        }
    );

const validationRules = Yup.object().shape({
    firstName: Yup.string().required("Пожалуйста укажите ваше имя."),
    lastName: Yup.string().required("Пожалуйста укажите вашу фамилию."),
    email: emailValidationRule,
    password: passwordValidationRule,
    confirmPassword: confirmPasswordValidationRule
});

export { validationRules };
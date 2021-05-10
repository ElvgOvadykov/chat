import React from 'react';
import { Form, Input, Button } from 'antd';
import { InfoCircleTwoTone, MailTwoTone } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

import { validationRules } from './validationRules';
import './SignUp.scss';

const SignUp = () => {
    const history = useHistory();
    let success = false;

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const renderSignUpForm = () => {
        return (
            <Formik
                onSubmit={(data) => {
                    alert(data);
                    success = true;
                }}
                initialValues={initialValues}
                validationSchema={validationRules}>
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <div className="sign-up__form">
                        <Form>
                            <Form.Item
                                validateStatus={
                                    !touched.firstName ? "" : errors.firstName ? "error" : "success"
                                }
                                hasFeedback>
                                <Input
                                    size="large"
                                    placeholder="Введите имя"
                                    value={values.firstName}
                                    name="firstName"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </Form.Item>
                            <Form.Item
                                validateStatus={
                                    !touched.lastName ? "" : errors.lastName ? "error" : "success"
                                }
                                hasFeedback>
                                <Input
                                    size="large"
                                    placeholder="Введите фамилию"
                                    value={values.lastName}
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </Form.Item>
                            <Form.Item
                                validateStatus={
                                    !touched.email ? "" : errors.email ? "error" : "success"
                                }
                                hasFeedback>
                                <Input
                                    prefix={
                                        <MailTwoTone />
                                    }
                                    size="large"
                                    placeholder="Введите почту"
                                    value={values.email}
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </Form.Item>
                            <Form.Item
                                validateStatus={
                                    !touched.password ? "" : errors.password ? "error" : "success"
                                }
                                hasFeedback>
                                <Input.Password
                                    size="large"
                                    placeholder="Введите пароль"
                                    value={values.password}
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </Form.Item>
                            <Form.Item
                                validateStatus={
                                    !touched.confirmPassword ? "" : errors.confirmPassword ? "error" : "success"
                                }
                                hasFeedback>
                                <Input.Password
                                    size="large"
                                    placeholder="Подтвердите пароль"
                                    value={values.confirmPassword}
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    block>
                                    Зарегистрироваться
                        </Button>
                            </Form.Item>
                            <Form.Item style={{ marginBottom: 0 }}>
                                <Button type="link" onClick={() => history.push("/login")}>
                                    Ввойти в аккаунт
                        </Button>
                            </Form.Item>
                        </Form>
                    </div>
                )}
            </Formik>
        )
    }

    const renderConfirmEmail = () => {
        return (
            <div className="sign-up__form sign-up__form__success">
                <InfoCircleTwoTone />
                <h2>Подтвердите свой аккаунт</h2>
                <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
            </div>
        )
    }

    return (
        <div className="sign-up">
            <h2>Регистрация</h2>
            <p>Для входа в чат, вам нужно зарегистрироваться</p>
            {success ? renderConfirmEmail() : renderSignUpForm()}
        </div>
    )
}

export default SignUp;
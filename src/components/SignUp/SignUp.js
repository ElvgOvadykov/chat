import React from 'react';
import { Form, Input, Button } from 'antd';
import { InfoCircleTwoTone } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

import './SignUp.scss';

const SignUp = () => {
    const history = useHistory();
    const [form] = Form.useForm();
    const success = false;

    const renderSignUpForm = () => {
        return(
            <div className="sign-up__form">
                <Form form={form}>
                    <Form.Item
                        name="firstname"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите Имя!',
                            },
                        ]}>
                        <Input size="large" placeholder="Введите имя" />
                    </Form.Item>
                    <Form.Item
                        name="lastname"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите фамилию!',
                            },
                        ]}>
                        <Input size="large" placeholder="Введите фамилию" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите почту!',
                            },
                            {
                                type: 'email',
                                message: 'Недействительный адрес электронной почты!',
                            },
                        ]}>
                        <Input size="large" placeholder="Введите почту" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите пароль!',
                            },
                        ]}>
                        <Input.Password size="large" placeholder="Введите пароль" />
                    </Form.Item>
                    <Form.Item
                        name="passwordCheck"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста подтвердите пароль!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Пароли не совпадают!'));
                                },
                            }),
                        ]}>
                        <Input.Password size="large" placeholder="Подтвердите пароль" />
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
        )
    }

    const renderConfirmEmail = () => {
        return(
            <div className="sign-up__form sign-up__form__success">
                <InfoCircleTwoTone />
                <h2>Подтвердите свой аккаунт</h2>
                <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
            </div>
        )
    }

    return(
        <div className="sign-up">
            <h2>Регистрация</h2>
            <p>Для входа в чат, вам нужно зарегистрироваться</p>
            {success ? renderConfirmEmail() : renderSignUpForm()}
        </div>
    )
}

export default SignUp;
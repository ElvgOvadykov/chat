import React from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from "react-router-dom";

import './SignUp.scss';

const SignUp = () => {
    const history = useHistory();

    return (
        <div className="sign-up">
            <h2>Регистрация</h2>
            <p>Для входа в чат, вам нужно зарегистрироваться</p>
            <div className="sign-up__form">
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
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите логин!',
                        },
                    ]}>
                    <Input size="large" placeholder="Введите логин" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите пароль!',
                        },
                    ]}>
                    <Input.Password size="large" />
                </Form.Item>
                <Form.Item
                    name="passwordCheck"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста подтвердите пароль!',
                        },
                    ]}>
                    <Input.Password size="large" />
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
            </div>
        </div>
    )
}

export default SignUp;
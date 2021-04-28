import React from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from "react-router-dom";

import './Auth.scss';

const Auth = () => {
    const history = useHistory();

    return (
        <div className='auth'>
            <h2>Войти в аккаунт</h2>
            <p>Пожалуйста ввойдите в свой аккаунт</p>
            <div className="auth__form">
                <Form>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите почту!',
                            },
                        ]}>
                        <Input size="large" placeholder="Введите почту" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите пароль!',
                            },
                        ]}>
                        <Input.Password size="large" placeholder="Введите пароль"/>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            block>
                            Ввойти в аккаунт
                        </Button>
                    </Form.Item>
                    <Form.Item style={{marginBottom: 0}}>
                        <Button type="link" onClick={() => history.push("/sign-up")}>
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Auth;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './login.module.scss';
const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://api.aoumi.site/api/v1/sign_in', {
                method: 'POST',
                body: JSON.stringify({ user: { email, password } }),
                mode: 'no-cors',
            });
            const result = await response.json();
            if (result.error) {
                setError(result.error);
            } else {
                // localStorage.setItem('token', result.token);
                console.log('Success:', result);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form className={cx('wrapper')} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={cx('label')}>Sign in</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Sign in..."
                    onChange={(e) => setEmail(e.target.value)}
                    className={cx('input')}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className={cx('label')}>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password..."
                    onChange={(e) => setPassword(e.target.value)}
                    className={cx('input')}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className={cx('submit')}>
                Submit
            </Button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </Form>
    );
}

export default Login;

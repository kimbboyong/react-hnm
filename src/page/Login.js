import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Loign = ({ setAuthenticate }) => {

    const navigate = useNavigate();

    const auth = async (email, password) => {
        const url = `https://my-json-server.typicode.com/kimbboyong/react-hnm/users`;
        const response = await fetch(url);
        const data = await response.json();

        for (let item of data) {
            if (item.email === email && item.password === password) {
                setAuthenticate(true)
                return true;
            }
        }
    }

    const loginUser = async (event) => {
        event.preventDefault();

        const isLogin = await auth(event.target.email.value, event.target.password.value);
        isLogin ? navigate('/') : alert('회원정보가 일치하지 않습니다.')
    }

    return (
        <Container>
            <Form onSubmit={(event) => loginUser(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        admin1@admin.com
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                        1234
                    </Form.Text>
                </Form.Group>
                <Button variant="danger" type="submit">
                    로그인
                </Button>
            </Form>

        </Container>
    )
}

export default Loign
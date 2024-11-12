
import axios from 'axios';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Registration = ({setLogedIn}) => {

    const navigate = useNavigate();

    const onFinish = ({password, username}) => {
        axios.post('http://lexx696.fvds.ru/api/auth/signup', {username, password})
            .then((resp) => {
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('username', resp.data.username)
                setLogedIn(true)
                navigate('/')
            })
            .catch((err) => {
                localStorage.removeItem('token')
                localStorage.removeItem('username')
                setLogedIn(false)
            })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          margin: 'auto',
          marginTop: 50,
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Логин"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
    
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    )
}

export default Registration
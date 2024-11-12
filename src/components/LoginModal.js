import { Modal, Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const LoginModal = ({isModalOpen, closeModal, setLogedIn}) => {
    const [form] = Form.useForm();

    const onFinish = ({password, remember, username}) => {
        axios.post('http://lexx696.fvds.ru/api/auth/signin', {username, password})
            .then((resp) => {
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('username', resp.data.username)
                setLogedIn(true)
                closeModal()
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
        <Modal title="Вход" open={isModalOpen} 
            okText="Войти"
            cancelText="Отмена"
            okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
            onCancel={() => closeModal()}
            destroyOnClose
            modalRender={(children) => (
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    form={form}
                    clearOnDestroy
                >
                  {children}
                </Form>
            )}>
                <Form.Item
                    label="Логин"
                    name="username"
                    wrapperCol={{
                        offset: 0,
                        span: 24,
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Введите логин!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    wrapperCol={{
                        offset: 0,
                        span: 24,
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Введите пароль!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 0,
                        span: 24,
                    }}
                >
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 0,
                        span: 24,
                    }}
                >
                    <Button type="link" htmlType="button" href='/signup'>
                        Зарегистрироваться
                    </Button>
                </Form.Item>
        </Modal>

    )
}

export default LoginModal
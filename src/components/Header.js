import { Layout, theme } from 'antd';
const { Header: AntdHeader } = Layout;
const Header = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <AntdHeader
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
    )
}
export default Header
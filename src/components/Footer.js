import { Layout } from 'antd';
const { Footer: AntdFooter } = Layout;

const Footer = () => {
    return (
        <AntdFooter
        style={{
          textAlign: 'center',
        }}
      >
        ©{new Date().getFullYear()} Created by Lexx
      </AntdFooter>
    )
}

export default Footer;
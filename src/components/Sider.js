import { Layout, Menu, theme, Divider, Button, Avatar } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import React, {useContext} from 'react';
import {
    CalendarOutlined,
    UserOutlined,
    LoginOutlined,
    LogoutOutlined,
    PictureOutlined,
  } from '@ant-design/icons';
import Weather from './Weather';
import { LoginContext } from './loginContext';

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const loginButtonStyle = {
  margin: 4, 
  padding: 
  "0 16px 0 24px", 
  width: "100%", 
  color: "rgba(255, 255, 255, 0.65)", 
  height: 40, 
  justifyContent: "flex-start"
}

const Sider = ({showLoginModal, logout}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLoggedIn = useContext(LoginContext);

    const items = [
      {icon: UserOutlined, route:'/', label: 'Главная'},
      {icon: CalendarOutlined, route:'/calendar', label: 'Календарь', protected: true},
      {icon: PictureOutlined, route:'/gallery', label: 'Галлерея', protected: true},
    ]
      .filter((route) => (isLoggedIn === false && route.protected === true) ? false : true)
      .map(
        ({icon, route, label}, index) => ({
          key: String(index),
          icon: React.createElement(icon),
          label,
          route,
        })
      );

    const {
        token: { siderBg },
    } = theme.useToken();

    const onClick = (e) => navigate(items[e.key].route);
    const currentSelectedItem = () => String(items.map(e => e.route).indexOf(location.pathname))

    const handleLogout = () => {
      logout()
    }

    return (
      <>
        <Layout.Sider style={{
            ...siderStyle,
            background: siderBg,
          }}>
            <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <div>
                <div className="demo-logo-vertical" />
                { isLoggedIn ? (
                  <>
                    <Avatar
                      style={{
                        backgroundColor: '#3b3a62',
                        verticalAlign: 'middle',
                      }}
                      size="large"
                    >
                      {localStorage.getItem('username').split('').at(0).toUpperCase()}
                    </Avatar>
                    <Button className="logout_button" type="text" onClick={handleLogout}
                      style={loginButtonStyle} icon={<LogoutOutlined />}>
                        Выход
                    </Button>
                  </>
                ) : (
                  <Button className="login_button" type="text" onClick={showLoginModal}
                    style={loginButtonStyle} icon={<LoginOutlined />}>
                      Вход
                  </Button>
                )}

                <Divider style={{borderBlockStart: "1px solid #3b3a62", marginLeft: 5}}/>
                <Menu onClick={onClick} defaultSelectedKeys={[currentSelectedItem()]} theme="dark" mode="inline" items={items} style={{background: siderBg}} />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: '100%', padding: 10, paddingRight: 0}}>
                { isLoggedIn &&
                  <Weather/>
                }
              </div>
            </div>
            
        </Layout.Sider>
      </>
    )
}

export default Sider
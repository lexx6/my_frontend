import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from "antd";
import ruRU from 'antd/locale/ru_RU';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={ruRU} theme={{
      token: {
        colorPrimary: '#3b3a62',
        colorBgContainer: '#ffffff',
        siderBg: '#3b5c79'
      },
    }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

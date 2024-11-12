import { Layout, theme, Calendar as AntdCalendar } from "antd"
import React from "react"

const Calendar = () => {
  const {
      // token: { colorBgContainer, borderRadiusLG },
      token: { borderRadiusLG },
  } = theme.useToken();

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <Layout.Content
      style={{
        margin: '24px 16px 0',
        overflow: 'initial',
      }}
    >
      <div
          style={{
              padding: 24,
              textAlign: 'center',
              // background: colorBgContainer,
              backgroundColor: "white",
              borderRadius: borderRadiusLG,
          }}
      >
        <AntdCalendar onPanelChange={onPanelChange} />
      </div>
    </Layout.Content>
  )
}

export default Calendar
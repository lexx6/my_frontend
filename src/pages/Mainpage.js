import { Layout, theme, Image  } from "antd"
import React from "react"

// const contentStyle = {
//   margin: 0,
//   width: '100%',
//   color: '#fff',
//   // lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const Mainpage = () => {
    const {
        // token: { colorBgContainer, borderRadiusLG },
        token: { borderRadiusLG },
    } = theme.useToken();

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
                    backgroundColor: "transparent",
                    borderRadius: borderRadiusLG,
                }}
            >
              <Image
                width={600}
                preview={false}
                src='/family.gif'
              />
              <Image
                width={"90%"}
                preview={false}
                src='/collage.jpg'
              />
          </div>
        </Layout.Content>
    )
}

export default Mainpage
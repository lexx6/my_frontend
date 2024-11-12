import { Layout, theme, Carousel } from "antd"
import React from "react"

const contentStyle = {
  margin: 0,
  width: '100%',
  color: '#fff',
  // lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Gallery = () => {
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
                    backgroundColor: 'rgb(59, 92, 121)',
                    borderRadius: borderRadiusLG,
                }}
            >
              <Carousel autoplay arrows draggable infinite={true}>
                <div>
                  <img style={contentStyle} src='https://loremflickr.com/1920/1080' alt=""/>
                </div>
                <div>
                  <img style={contentStyle} src='https://loremflickr.com/1910/1070' alt=""/>
                </div>
                <div>
                  <img style={contentStyle} src='https://loremflickr.com/1900/1050' alt=""/> 
                </div>
                <div>
                  <img style={contentStyle} src='https://loremflickr.com/1024/900' alt=""/> 
                </div>
              </Carousel>
          </div>
        </Layout.Content>
    )
}

export default Gallery
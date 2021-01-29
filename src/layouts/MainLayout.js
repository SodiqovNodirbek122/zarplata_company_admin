import React, { useState } from 'react'
import { Layout } from 'antd'
import RightContent from "../components/RightContent";
import MenuHeader from "../components/MenuHeader";
import MainMenu from "../components/Menu";
import basic from "../constants/basic";
import '../assets/styles/layout.css'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'

const { Header, Content, Sider } = Layout

export default function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className='App'>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          className='slider'
          collapsible
          theme={basic.MENU_THEME}
          width={250}
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <MenuHeader collapsed={collapsed}/>
          <MainMenu />
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background header' style={{ padding: 0 }} >
            { collapsed ? <MenuUnfoldOutlined onClick={() => { setCollapsed(!collapsed) }} className='menuIcon' /> : <MenuFoldOutlined onClick={() => { setCollapsed(!collapsed) }} className='menuIcon' /> }
            <RightContent/>
          </Header>
          <Content style={{ margin: '0 16px' }}>{children}</Content>
        </Layout>
      </Layout>
    </div>
  )
}

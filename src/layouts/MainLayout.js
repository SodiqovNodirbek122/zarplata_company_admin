import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Header, Content, Sider } = Layout
const { SubMenu } = Menu

export default function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className='App'>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            <Menu.Item key='1' icon={<PieChartOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<DesktopOutlined />}>
              <Link to='/contact'>Contact</Link>
            </Menu.Item>
            <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
              <Menu.Item key='3'>Tom</Menu.Item>
              <Menu.Item key='4'>Bill</Menu.Item>
              <Menu.Item key='5'>Alex</Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
              <Menu.Item key='6'>Team 1</Menu.Item>
              <Menu.Item key='8'>Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key='9' icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>{children}</Content>
        </Layout>
      </Layout>
    </div>
  )
}

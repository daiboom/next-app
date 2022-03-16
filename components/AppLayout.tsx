import React, { FC } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const AppLayout: FC = ({ children }) => {
  console.log('AppLayout')
  return <>
    <Layout className='full-height'>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1"><Link href="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link href="/account/login">Sign In</Link></Menu.Item>
          <Menu.Item key="3"><Link href="/account/register">Sign Up</Link></Menu.Item>
          <Menu.Item key="4"><Link href="/test">Test</Link></Menu.Item>
        </Menu>
      </Header>
      <hr />
      <Content className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          height: 100 + '%',
        }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}> Saltlux Test App</Footer>
    </Layout>
  </>

}

export default AppLayout
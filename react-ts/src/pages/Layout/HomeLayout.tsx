import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
// import HomePage from '../HomePage';
// import CategoryPage from '../categoryPage';
// import ProductPage from '../ProductPage';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

// const items: MenuItem[] = [
//   getItem('Home', '1', <HomePage />),
//   getItem('Category', '2', <CategoryPage />),
//   getItem('Product', '3', <ProductPage />),
// ];

const HomeLayout = () => {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  

  return (
    <div style={{ width: 256 }}>
    <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Button>
    <Sider>
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key={1}>
                <Link to={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item key={3}>
                <Link to={"/category"}>Category</Link>
            </Menu.Item>
            <Menu.Item key={2}>
                <Link to={"/products"}>Product</Link>
            </Menu.Item>
        </Menu>
      </Sider>
  </div>
  )
}

export default HomeLayout
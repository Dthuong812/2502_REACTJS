import React, { useState } from 'react';

import type { MenuProps } from 'antd';
import {  Badge, Menu } from 'antd';
import ButtonComponent from './ButtonComponent';
import InputComponent from './InputComponent';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
      label: 'Trang chủ',
      key: 'home',

    },
    {
      label: 'Thực đơn',
      key: 'submenu',
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            { label: 'Option 1', key: 'setting:1' },
            { label: 'Option 2', key: 'setting:2' },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            { label: 'Option 3', key: 'setting:3' },
            { label: 'Option 4', key: 'setting:4' },
          ],
        },
      ],
    },
    {
      label: 'Về chúng tôi',
      key: 'about',
    },
    {
      label: 'Tin tức',
      key: 'news',
    },
    {
      key: 'order',
      icon: <ButtonComponent className="!text-white !bg-orange-500 !font-semibold">Đặt tiệc ngay</ButtonComponent>,
    },
  ];
const HeaderComponent :React.FC = () => {
  const [current, setCurrent] = useState('home');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  }
  return (
    <div className='flex items-center justify-between pl-6 pr-6 bg-white'>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}  className='!pt-3 !pb-3 !pl-6  !border-none font-semibold' />
    <div className="flex items-center gap-4 pr-10" >
    
        <InputComponent placeholder='Tìm kiếm món ăn'  />

  
        <div className="flex items-center gap-2 cursor-pointer">
          <UserOutlined style={{ fontSize: '18px' }} />
          <span>Tài khoản</span>
        </div>

    
        <Badge count={1} offset={[5, 0]}>
          <ShoppingCartOutlined style={{ fontSize: '18px', cursor: 'pointer' }} />
        </Badge>
      </div>
    </div>
  )
}


export default HeaderComponent
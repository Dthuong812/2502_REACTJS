import React from 'react'
import MenuComponent from './MenuComponent'
import { Badge } from 'antd'
import InputComponent from './InputComponent'
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useCart } from '../context/CartContext'  

const HeaderComponent = () => {
  const { cartCount } = useCart();


  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between pt-3 pb-3 pl-6 pr-6 bg-white shadow-md'>
      <MenuComponent />
      <div className="flex items-center gap-4 pr-10">
        <InputComponent placeholder='Tìm kiếm món ăn' />
        <div className="flex items-center gap-2 cursor-pointer">
          <UserOutlined style={{ fontSize: '18px' }} />
          <span>Tài khoản</span>
        </div>

        <Badge count={cartCount} offset={[5, 0]} size="small">
          <ShoppingCartOutlined style={{ fontSize: '18px', cursor: 'pointer' }} />
        </Badge>
      </div>
    </div>
  )
}

export default HeaderComponent

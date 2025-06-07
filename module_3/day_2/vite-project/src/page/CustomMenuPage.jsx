import { Menu } from 'antd'
import React from 'react'
import MenuPersonalComponent from '../components/MenuPersonalComponent'

const CustomMenuPage = () => {
  return (
    <div className="items-center justify-center w-full px-8 lex-col max-w-8xl mb-25 mt-25 lg:flex-row">
      <MenuPersonalComponent/>
    </div>
  )
}

export default CustomMenuPage
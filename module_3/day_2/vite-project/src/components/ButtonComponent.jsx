import React from 'react';
import { Button, } from 'antd';


const ButtonComponent = ({children,className,onClick}) => {

  return (
    <Button className={`!rounded-none border-none !px-5 !py-5 ${className}` } onClick={onClick}>{children}</Button>
  )
}

export default ButtonComponent
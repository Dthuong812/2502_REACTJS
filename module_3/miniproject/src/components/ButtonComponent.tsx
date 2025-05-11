import React from 'react';
import { Button, } from 'antd';

interface ButtonComponentProps {
    children: React.ReactNode;
    className?: string;
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({children,className}) => {

  return (
    <Button className={className}>{children}</Button>
  )
}

export default ButtonComponent
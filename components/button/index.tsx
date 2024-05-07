import React, { ButtonHTMLAttributes } from 'react';

interface PropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: 'blue' | 'outline';
  clickHandler?: () => any;
}

const Button = (props: PropsInterface) => {
  const { children, variant, disabled, clickHandler } = props;

  const renderContent = (children: React.ReactNode) => {
    if (disabled) {
      return <span>{children}</span>;
    } else {
      return <span onClick={clickHandler}>{children}</span>;
    }
  };
  return <div className='cursor-pointer'>{renderContent(children)}</div>;
};
export default Button;

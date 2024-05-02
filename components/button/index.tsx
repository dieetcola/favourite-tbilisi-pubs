import React from 'react';

interface PropsInterface {
  disabled?: boolean;
  children?: React.ReactNode;
  clickHandler?: () => any;
}

const Button = (props: PropsInterface) => {
  const { children, disabled, clickHandler } = props;

  const renderContent = (children: React.ReactNode) => {
    if (disabled) {
      return <span>{children}</span>;
    } else {
      return <span onClick={clickHandler}>{children}</span>;
    }
  };
  return <div>{renderContent(children)}</div>;
};
export default Button;

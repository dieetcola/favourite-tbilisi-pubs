import React, { ReactNode, ComponentProps } from 'react';

export function Button({ children, disabled, onClick }: ComponentProps<'button'>) {
  const renderContent = (children: ReactNode) => {
    if (disabled) {
      return <span>{children}</span>;
    } else {
      return <span onClick={onClick}>{children}</span>;
    }
  };
  return <div className='cursor-pointer'>{renderContent(children)}</div>;
}

import React, { ReactNode, ComponentProps } from 'react';

export function Button({ children, disabled, onClick }: ComponentProps<'button'>) {
  const renderContent = (children: ReactNode) => {
    if (disabled) {
      return <button>{children}</button>;
    } else {
      return <button onClick={onClick}>{children}</button>;
    }
  };
  return <div className='cursor-pointer'>{renderContent(children)}</div>;
}

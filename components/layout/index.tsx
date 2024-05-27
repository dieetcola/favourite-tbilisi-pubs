import React, { ReactNode } from 'react';
import localFont from 'next/font/local';

import Header from 'components/header';
import FuzzyOverlay from 'components/fuzzy-overlay';

const surt = localFont({
  src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Black.ttf',
  display: 'swap',
  variable: '--font-surt-bold',
});

const mono = localFont({
  src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Light.ttf',
  display: 'swap',
  variable: '--font-mono-light',
});

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <main className={`${surt.variable} ${mono.variable} relative overflow-hidden font-sans`}>
      <Header />
      {children}
      <FuzzyOverlay />
    </main>
  );
};

export default Layout;

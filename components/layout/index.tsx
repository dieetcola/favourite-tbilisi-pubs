import React, { ReactNode } from 'react';

import Header from 'components/header';
import FuzzyOverlay from 'components/fuzzy-overlay';
import { mono, surt } from 'lib/fonts';

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

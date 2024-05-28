import React, { ReactNode } from 'react';

import { Header } from 'components/header';
import { FuzzyOverlay } from 'components/fuzzy-overlay';
import { mono, surt } from 'lib/fonts';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <main className={`${surt.variable} ${mono.variable} relative overflow-hidden font-sans`}>
      <Header />
      {children}
      <FuzzyOverlay />
    </main>
  );
}

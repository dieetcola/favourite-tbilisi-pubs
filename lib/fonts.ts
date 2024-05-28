import localFont from 'next/font/local';

export const surt = localFont({
  src: '../public/fonts/InputMonoNarrow/InputMonoNarrow-Black.ttf',
  display: 'swap',
  variable: '--font-surt-bold',
});

export const mono = localFont({
  src: '../public/fonts/InputMonoNarrow/InputMonoNarrow-Light.ttf',
  display: 'swap',
  variable: '--font-mono-light',
});

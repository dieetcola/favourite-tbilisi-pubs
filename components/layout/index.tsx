import Header from 'components/header';
import localFont from 'next/font/local';
import { motion } from 'framer-motion';

interface PropsInterface {
  children: React.ReactNode;
}

const surt = localFont({
  src: '../../public/fonts/InputMono/InputMono-Regular.ttf',
  variable: '--font-surt-bold',
});

const Layout = (props: PropsInterface): JSX.Element => {
  return (
    <>
      <Header />
      <main className={`${surt.variable} font-sans`}>{props.children}</main>
    </>
  );
};
export default Layout;

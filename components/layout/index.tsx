import Header from 'components/header';
import localFont from 'next/font/local';
import { motion } from 'framer-motion';

interface PropsInterface {
  children: React.ReactNode;
}

const surt = localFont({
  // src: '../../public/fonts/InputMono/InputMono-Black.ttf',
  // src: '../../public/fonts/InputMono/InputMono-Medium.ttf',
  // src: '../../public/fonts/InputMono/InputMono-BlackItalic.ttf',
  // src: '../../public/fonts/InputMono/InputMono-BoldItalic.ttf',
  // src: '../../public/fonts/InputMono/InputMono-Italic.ttf',
  // src: '../../public/fonts/InputMono/InputMono-MediumItalic.ttf',
  // src: '../../public/fonts/InputMonoCompressed/InputMonoCompressed-BlackItalic.ttf',
  // src: '../../public/fonts/InputMonoCompressed/InputMonoCompressed-MediumItalic.ttf',
  // src: '../../public/fonts/InputMonoCondensed/InputMonoCondensed-BlackItalic.ttf',
  // src: '../../public/fonts/InputMonoCondensed/InputMonoCondensed-Medium.ttf',
  // src: '../../public/fonts/InputMonoCondensed/InputMonoCondensed-MediumItalic.ttf',
  src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Black.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Light.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-BlackItalic.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Bold.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-BoldItalic.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Italic.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Medium.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-MediumItalic.ttf',
  display: 'swap',
  variable: '--font-surt-bold',
});

const mono = localFont({
  // src: '../../public/fonts/InputMono/InputMono-Black.ttf',
  // src: '../../public/fonts/InputMono/InputMono-Medium.ttf',
  // src: '../../public/fonts/InputMono/InputMono-BlackItalic.ttf',
  // src: '../../public/fonts/InputMono/InputMono-BoldItalic.ttf',
  // src: '../../public/fonts/InputMono/InputMono-Italic.ttf',
  // src: '../../public/fonts/InputMono/InputMono-MediumItalic.ttf',
  // src: '../../public/fonts/InputMonoCompressed/InputMonoCompressed-BlackItalic.ttf',
  // src: '../../public/fonts/InputMonoCompressed/InputMonoCompressed-MediumItalic.ttf',
  // src: '../../public/fonts/InputMonoCondensed/InputMonoCondensed-BlackItalic.ttf',
  // src: '../../public/fonts/InputMonoCondensed/InputMonoCondensed-Medium.ttf',
  // src: '../../public/fonts/InputMonoCondensed/InputMonoCondensed-MediumItalic.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Black.ttf',
  src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Light.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-BlackItalic.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Bold.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-BoldItalic.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Italic.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Medium.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-MediumItalic.ttf',
  display: 'swap',
  variable: '--font-mono-light',
});

const Layout = (props: PropsInterface): JSX.Element => {
  return (
    <main className={`${surt.variable} ${mono.variable} relative overflow-hidden font-sans`}>
      <Header />
      {props.children}
      <FuzzyOverlay />
    </main>
  );
};

export default Layout;

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: 'translateX(-10%) translateY(-10%)' }}
      animate={{
        transform: 'translateX(10%) translateY(10%)',
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: 'linear',
        repeatType: 'mirror',
      }}
      style={{
        backgroundImage: 'url(/images/black-noise.png)',
      }}
      className=' pointer-events-none absolute -inset-[100%] opacity-[6%]'
    />
  );
};

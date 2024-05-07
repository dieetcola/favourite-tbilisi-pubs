import AuthElement from 'components/header/auth-element';
import localFont from 'next/font/local';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
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
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Black.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-BlackItalic.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Bold.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-BoldItalic.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Italic.ttf',
  // src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-Medium.ttf',
  src: '../../public/fonts/InputMonoNarrow/InputMonoNarrow-MediumItalic.ttf',
  variable: '--font-surt-bold',
});

const Header = (): JSX.Element => {
  return (
    // <header className='bg-black'>
    //   <div>
    //     <AuthElement />
    //   </div>
    // </header>
    // <header className={`${surt.variable} font-sans bg-neutral-950 p-4 text-white`}>
    //   <div className='h-32 max-w-full px-2 sm:px-6 lg:px-8'>
    //     <div className='flex space-x-4  justify-end py-4 uppercase font-sans'>
    //       <AuthElement />
    //     </div>
    //   </div>
    // </header>

    <header className='flex items-center justify-end font-medium  bg-neutral-950 text-white font-mono'>
      <AuthElement />
    </header>
  );
};
export default Header;

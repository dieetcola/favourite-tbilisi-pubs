import AuthElement from 'components/header/auth-element';

const Header = (): JSX.Element => {
  return (
    <header className='flex items-center justify-end font-medium  bg-neutral-950 text-white font-mono'>
      <AuthElement />
    </header>
  );
};
export default Header;

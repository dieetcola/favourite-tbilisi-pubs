import { AuthElement } from 'components/header/auth-element';

export function Header() {
  return (
    <header className='flex items-center justify-end font-medium bg-neutral-950 text-white font-mono'>
      <AuthElement />
    </header>
  );
}

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

import Button from 'components/button';

const AuthElement = (): JSX.Element => {
  const { data: session, status } = useSession();

  const renderContent = () => {
    if (status === 'authenticated') {
      return (
        <>
          <span className=''>Hi ({session?.user?.name})</span>
          <Button>
            <Link href={`/list/${session?.user.fdlst_private_userId}`}>(Your wish list)</Link>
          </Button>
          <Button onClick={() => signOut()}>(Sign out)</Button>
        </>
      );
    } else {
      return <Button onClick={() => signIn()}>(Sign in)</Button>;
    }
  };

  return (
    <div className='flex gap-4 uppercase text-[13px] md:text-[17px] px-4 pb-16 pt-6 md:px-8 lg:pt-8 md:pb-24'>
      {renderContent()}
    </div>
  );
};
export default AuthElement;

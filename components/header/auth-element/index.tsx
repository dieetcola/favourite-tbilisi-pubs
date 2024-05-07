import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import Button from 'components/button';

const AuthElement = (): JSX.Element => {
  const { data: session, status } = useSession();
  return (
    // <div className='mt-5 flex lg:ml-4 lg:mt-0'>
    <div className='px-4 py-8  flex  uppercase text-[13px] md:text-[17px] font-thin  gap-4 lg:ml-4 lg:mt-10  md:px-8'>
      {status === 'authenticated' && (
        <span className='hidden sm:block'>Hi ({session?.user?.name})</span>
      )}

      <>
        {status === 'authenticated' && (
          <>
            <Button variant='outline'>
              <Link href={`/list/${session?.user.fdlst_private_userId}`}>(Your wish list)</Link>
            </Button>
            <Button variant='blue' clickHandler={() => signOut()}>
              (Sign out)
            </Button>
          </>
        )}
        {status == 'unauthenticated' && (
          <>
            <Button variant='blue' clickHandler={() => signIn()}>
              (Sign in)
            </Button>
          </>
        )}
      </>
    </div>
  );
};
export default AuthElement;

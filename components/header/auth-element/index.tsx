import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import Button from 'components/button';

const AuthElement = (): JSX.Element => {
  const { data: session, status } = useSession();
  return (
    <>
      {status === 'authenticated' && (
        <span>
          Hi <b>{session?.user?.name}</b>
        </span>
      )}
      <nav>
        {status === 'authenticated' && (
          <>
            <Button>
              <Link href={`/list/${session?.user.fdlst_private_userId}`}>Your wish list</Link>
            </Button>
            <Button clickHandler={() => signOut()}>Sign out</Button>
          </>
        )}
        {status == 'unauthenticated' && (
          <>
            <Button clickHandler={() => signIn()}>Sign in</Button>
          </>
        )}
      </nav>
    </>
  );
};
export default AuthElement;

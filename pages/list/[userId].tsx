import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
  PreviewData,
  InferGetServerSidePropsType,
} from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import dbConnect from 'middleware/db-connect';
import { onUserWishlist } from 'mongoose/locations/services';
import LocationsList from 'components/locations-list';
import { useSession } from 'next-auth/react';
import { LocationInterface } from 'mongoose/locations/interface';

const List: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const locations: LocationInterface[] = JSON.parse(props.data?.locations);
  const userId: string | undefined = props.data?.userId;
  const { data: session } = useSession();
  let title = `The Food Finder- A personal wish list`;
  let isCurrentUsers = userId && session?.user.fdlst_private_userId === userId;

  return (
    <div className=''>
      <Head>
        <title>{title}</title>
        content={`The Food Finder. A personal wish list.`}
      </Head>

      {isCurrentUsers && locations?.length === 0 && (
        <>
          <h2>Your list is currently empty! :(</h2>
          <p>Start adding locations to your wish list!</p>
        </>
      )}
      <LocationsList locations={locations} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) => {
  let { userId } = context.query;
  let locations: LocationInterface[] | [] = [];
  try {
    await dbConnect();
    locations = await onUserWishlist(userId as string);
  } catch (err: any) {}
  return {
    // the props will be received by the page component
    props: {
      data: { locations: JSON.stringify(locations), userId: userId },
    },
  };
};
export default List;

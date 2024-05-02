import Head from 'next/head';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  PreviewData,
  NextPage,
} from 'next';
import dbConnect from 'middleware/db-connect';
import { findLocationsById } from 'mongoose/locations/services';
import { ParsedUrlQuery } from 'querystring';
import { LocationInterface } from 'mongoose/locations/interface';
import LocationDetail from 'components/locations-details';

const Location: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  let location: LocationInterface = JSON.parse(props.data?.location);
  let title = `The Food Finder - Details for ${location?.name}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={`The Food Finder.
     Details for ${location?.name}`}
        />
      </Head>
      <LocationDetail location={location} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) => {
  let locations: LocationInterface[] | [];
  let { locationId } = context.query;
  try {
    await dbConnect();
    locations = await findLocationsById([locationId as string]);
    if (!locations.length) {
      throw new Error(`Locations ${locationId} not found`);
    }
  } catch (err: any) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: { location: JSON.stringify(locations.pop()) } },
  };
};

export default Location;

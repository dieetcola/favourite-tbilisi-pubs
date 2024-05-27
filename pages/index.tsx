import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import { findAllLocations } from 'mongoose/locations/services';
import { LocationInterface } from 'mongoose/locations/interface';
import dbConnect from 'middleware/db-connect';
import LocationsList from 'components/locations-list';

const Home: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const locations: LocationInterface[] = JSON.parse(props.data?.locations);

  return (
    <>
      <LocationsList locations={locations} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let locations: LocationInterface[] | [];
  try {
    await dbConnect();
    locations = await findAllLocations();
  } catch (err: any) {
    return { notFound: true };
  }
  return {
    props: {
      data: { locations: JSON.stringify(locations) },
    },
  };
};

export default Home;

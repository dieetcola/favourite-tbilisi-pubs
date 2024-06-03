import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { LocationsList } from 'components/locations-list';
import { findAllLocations } from 'mongoose/locations/services';
import { LocationInterface } from 'mongoose/locations/interface';
import dbConnect from 'middleware/db-connect';

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const locations: LocationInterface[] = JSON.parse(props.data?.locations);

  return (
    <div className=' h-screen text-stone-100 bg-neutral-950'>
      <LocationsList locations={locations} />
    </div>
  );
}

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

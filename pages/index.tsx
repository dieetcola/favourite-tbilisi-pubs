import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import LocationsList from 'components/locations-list';
import dbConnect from 'middleware/db-connect';
import { findAllLocations } from 'mongoose/locations/services';
import { LocationInterface } from 'mongoose/locations/interface';
import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';

const Home: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const locations: LocationInterface[] = JSON.parse(props.data?.locations);
  let title = `The Food Finder - Home`;
  // console.log(locations);

  return (
    <div>
      <LocationsList locations={locations} />
      {/* <ExampleContent /> */}

      {/* <FuzzyOverlay /> */}
    </div>
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

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: 'translateX(-10%) translateY(-10%)' }}
      animate={{
        transform: 'translateX(10%) translateY(10%)',
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: 'linear',
        repeatType: 'mirror',
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url(/images/black-noise.png)',
        // backgroundImage: 'url("/noise.png")',
      }}
      className=' pointer-events-none absolute -inset-[100%] opacity-[6%]'
    />
  );
};

const ExampleContent = () => {
  return (
    <div className='relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8'>
      <p className='text-center text-6xl font-black text-neutral-50'>Fuzzy Overlay Example</p>
      <p className='text-center text-neutral-400'>
        This is a basic example of using a lo-fi fuzzy overlay 📺
      </p>
      <div className='flex items-center justify-center gap-3'>
        <button className='text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800'>
          Pricing
        </button>
        <button className='w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50'>
          Try it free
        </button>
      </div>
    </div>
  );
};

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Button from 'components/button';
import { LocationInterface } from 'mongoose/locations/interface';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Background from '../../public/assets/1.jpg';

interface PropsInterface {
  location: LocationInterface;
}

interface WishlistInterface {
  locationId: string;
  userId: string;
}

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Material',
    description: 'Solid walnut base with rare earth magnets and powder coated steel card cover',
  },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  {
    name: 'Considerations',
    description: 'Made from natural materials. Grain and color vary with each item.',
  },
];

const LocationDetail = (props: PropsInterface): JSX.Element => {
  let location: LocationInterface = props.location;
  console.log(location);
  const { data: session } = useSession();
  const [onWishlist, setOnWishlist] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    let userId = session?.user.fdlst_private_userId;
    setOnWishlist(userId && location.on_wishlist.includes(userId) ? true : false);
  }, [session]);

  const wishlistAction = (props: WishlistInterface) => {
    const { locationId, userId } = props;
    console.log(locationId);
    console.log(userId);
    if (loading) {
      return false;
    }
    setLoading(true);

    let action = !onWishlist ? 'addWishlist' : 'removeWishlist';

    fetch('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
                            mutation wishlist {
                                ${action}(
                                    location_id: "${locationId}",
                                    user_id: "${userId}"
                                ) {
                                    on_wishlist
                                }
                            }`,
      }),
    })
      .then((result) => {
        if (result.status === 200) {
          setOnWishlist(action === 'addWishlist' ? true : false);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    // <>
    //   {location && (
    //     <ul>
    //       <li>
    //         <b>Address: </b>
    //         {location.address}
    //       </li>

    //       <li>
    //         <b>Name: </b>
    //         {location.name}
    //       </li>
    //       <li>
    //         <b>Cuisine: </b>
    //         {location.cuisine}
    //       </li>
    //     </ul>
    //   )}

    //   {session?.user.fdlst_private_userId && (
    //     <Button
    //       variant={!onWishlist ? 'outline' : 'blue'}
    //       disabled={loading ? true : false}
    //       clickHandler={() =>
    //         wishlistAction({
    //           locationId: location.location_id,
    //           userId: session?.user.fdlst_private_userId,
    //         })
    //       }>
    //       {onWishlist && <>Remove from your Wishlist</>}
    //       {!onWishlist && <>Add to your Wishlist</>}
    //     </Button>
    //   )}
    // </>
    <div className='bg-neutral-950 min-h-screen  py-12 text-zinc-50'>
      <div className='mx-auto grid grid-flow-row-dense md:grid-flow-col-dense   uppercase'>
        <div className='mx-auto grid  '>
          <h1 className='mb-12 text-[144px] font-medium  leading-tight'>{location.name}</h1>
          <span className='text-zinc-400'>ADDRESS: {location.address}</span>
          <span className='text-zinc-400'>COMMENT: {location.comment}</span>
          <span className='text-zinc-400'>CUISINE: {location.cuisine}</span>
          <span className='text-zinc-400'>RATING: {location.rating}</span>
        </div>
        <Image
          alt='Mountains'
          src={location.image}
          width={700}
          height={475}
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        {/* <Image
          alt='Next.js logo'
          src={location.image}
          width={1200}
          height={400}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        /> */}
        {/* <div style={{ position: 'relative', width: '300px', height: '500px' }}>
          <Image
            alt='Mountains'
            src={location.image}
            fill
            sizes='100vw'
            style={{
              objectFit: 'cover',
            }}
          />
        </div> */}
        {/* <div style={{ position: 'relative', width: '800px', height: '500px' }}>
          <Image
            alt='Mountains'
            src={location.image}
            fill
            sizes='100vw'
            style={{
              objectFit: 'contain',
            }}
          />
        </div> */}
        {/* <div style={{ position: 'relative', width: '1000px', height: '700px' }}>
          <Image
            alt='Mountains'
            src={location.image}
            quality={100}
            fill
            sizes='100vw'
            style={{
              objectFit: 'cover',
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default LocationDetail;

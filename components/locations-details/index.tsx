import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import Button from 'components/button';
import { LocationInterface } from 'mongoose/locations/interface';

const LocationDetail = (props: { location: LocationInterface }): JSX.Element => {
  let location = props.location;
  const { data: session } = useSession();
  const [onWishlist, setOnWishlist] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    let userId = session?.user.fdlst_private_userId;
    setOnWishlist(userId && location.on_wishlist.includes(userId) ? true : false);
  }, [session]);

  const wishlistAction = (props: { locationId: string; userId: string }) => {
    const { locationId, userId } = props;

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
    <div className='bg-neutral-950 min-h-screen px-4 py-12 text-zinc-50'>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(600px, auto))',
        }}>
        <div style={{ position: 'relative', height: '400px' }}>
          {location && (
            <>
              <ul className=''>
                <li>
                  <h2 className='text-[124px] uppercase max-w-72 leading-[6.5rem] tracking-[-.045em]'>
                    {location.name}
                  </h2>
                </li>
                <li>
                  <b>Address: </b>
                  {location.address}
                </li>

                <li>
                  <b>Comment: </b>
                  {location.comment}
                </li>
                <li>
                  <b>Cuisine: </b>
                  {location.cuisine}
                </li>
                <li>
                  <b>Rating: </b>
                  {location.rating}
                </li>
              </ul>

              {session?.user.fdlst_private_userId && (
                <Button
                  disabled={loading ? true : false}
                  onClick={() =>
                    wishlistAction({
                      locationId: location.location_id,
                      userId: session?.user.fdlst_private_userId,
                    })
                  }>
                  {onWishlist && <>Remove from your Wishlist</>}
                  {!onWishlist && <>Add to your Wishlist</>}
                </Button>
              )}
            </>
          )}
        </div>
        <div style={{ position: 'relative', height: '400px' }}>
          <Image
            alt='Mountains'
            src={location.image}
            fill
            sizes='(min-width: 808px) 50vw, 100vw'
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;

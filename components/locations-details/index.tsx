import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import { Button } from 'components/button';
import { LocationInterface } from 'mongoose/locations/interface';
import { LocationDetailInfo } from './location-detail-info';
import { LocationDetailImage } from './location-detail-image';

export function LocationDetail(props: { location: LocationInterface }) {
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
        console.log(result);
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
      <div className='grid grid-cols-16'>
        <div className='relative h-96'>
          {location && (
            <>
              <LocationDetailInfo
                name={location.name}
                address={location.address}
                comment={location.comment}
                cuisine={location.cuisine}
                rating={location.rating}
              />
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
        <LocationDetailImage src={location.image} />
      </div>
    </div>
  );
}

import Link from 'components/link';
import React from 'react';
import { LocationsListItemProps } from 'types';

const LocationsListItem = ({ location, isLast }: LocationsListItemProps): JSX.Element => {
  return (
    <>
      {location && (
        <section className='bg-neutral-950 px-4 md:px-8'>
          <div className='max-w-full'>
            <Link
              name={location.name}
              subheading='Learn what we do here'
              image={location.image}
              href={`/location/${location.location_id}`}
              location_id={location.location_id}
              cuisine={location.cuisine}
              isLast={isLast}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default LocationsListItem;

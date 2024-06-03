import React from 'react';
import { Link } from 'components/link';

import { LocationsListItemProps } from 'types';

export function LocationsListItem({ location, isLast }: LocationsListItemProps) {
  return (
    <>
      {location && (
        <section className='px-4 md:px-8'>
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
}

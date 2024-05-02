import Link from 'next/link';
import { LocationInterface } from 'mongoose/locations/interface';

interface PropsInterface {
  location: LocationInterface;
}

const LocationsListItem = (props: PropsInterface): JSX.Element => {
  const location = props.location;
  return (
    <>
      {location && (
        <li>
          <Link href={`/location/${location.location_id}`}>
            <h2>
              {location.name}
              <small>{location.cuisine}</small>
            </h2>
          </Link>
        </li>
      )}
    </>
  );
};
export default LocationsListItem;

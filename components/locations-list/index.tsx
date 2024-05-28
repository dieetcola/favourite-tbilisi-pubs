import { LocationInterface } from 'mongoose/locations/interface';
import LocationsListItem from 'components/locations-list-item';

const LocationsList = ({ locations }: { locations: LocationInterface[] }): JSX.Element => {
  return (
    <>
      {locations.map((location, i) => {
        return (
          <LocationsListItem
            location={location}
            key={location.location_id}
            isLast={i === locations.length - 1}
          />
        );
      })}
    </>
  );
};
export default LocationsList;

import { LocationInterface } from 'mongoose/locations/interface';
import LocationsListItem from 'components/locations-list-item';

const LocationsList = ({ locations }: { locations: LocationInterface[] }): JSX.Element => {
  return (
    <>
      {locations.map((location) => {
        return <LocationsListItem location={location} key={location.location_id} />;
      })}
    </>
  );
};
export default LocationsList;

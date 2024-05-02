import LocationsListItem from 'components/locations-list-item';
import { LocationInterface } from 'mongoose/locations/interface';

interface PropsInterface {
  locations: LocationInterface[];
}

const LocationsList = (props: PropsInterface): JSX.Element => {
  return (
    <>
      {props.locations.map((location) => {
        return <LocationsListItem location={location} key={location.location_id} />;
      })}
    </>
  );
};
export default LocationsList;

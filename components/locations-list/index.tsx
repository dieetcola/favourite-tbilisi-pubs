import LocationsListItem from 'components/locations-list-item';
import { LocationInterface } from 'mongoose/locations/interface';

interface PropsInterface {
  locations: LocationInterface[];
}

const LocationsList = (props: PropsInterface): JSX.Element => {
  // console.log(props.locations.length);
  return (
    <>
      {props.locations.map((location, i) => {
        return (
          <LocationsListItem
            location={location}
            isLast={i !== props.locations.length - 1}
            key={location.location_id}
          />
        );
      })}
    </>
  );
};
export default LocationsList;

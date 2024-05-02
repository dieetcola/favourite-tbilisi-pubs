import { LocationInterface } from 'mongoose/locations/interface';

interface PropsInterface {
  location: LocationInterface;
}

const LocationDetail = (props: PropsInterface): JSX.Element => {
  let location = props.location;
  return (
    <div>
      {location && (
        <ul>
          <li>
            <b>Address: </b>
            {location.address}
          </li>

          <li>
            <b>Cuisine: </b>
            {location.cuisine}
          </li>
        </ul>
      )}
    </div>
  );
};
export default LocationDetail;

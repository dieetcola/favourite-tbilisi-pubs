import { LocationInterface } from 'mongoose/locations/interface';
import { LocationsListItem } from 'components/locations-list-item';

export function LocationsList({ locations }: { locations: LocationInterface[] }) {
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
}

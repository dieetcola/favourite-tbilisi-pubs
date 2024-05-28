import { LocationInterface } from 'mongoose/locations/interface';

export interface LocationsListItemProps {
  location: LocationInterface;
  isLast: boolean;
}

type PickLocationInterface = Pick<LocationInterface, 'name' | 'image' | 'location_id' | 'cuisine'>;

export interface LinkProps extends PickLocationInterface {
  subheading: string;
  href: string;
  isLast: boolean;
}

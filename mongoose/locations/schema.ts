import { Schema } from 'mongoose';
import { LocationInterface } from './interface';

export const LocationSchema = new Schema<LocationInterface>({
  address: {
    type: 'String',
    required: true,
  },
  cuisine: {
    type: 'String',
    required: true,
  },
  comment: {
    type: 'String',
    required: true,
  },
  rating: {
    type: 'String',
    required: true,
  },
  name: {
    type: 'String',
    required: true,
  },
  image: {
    type: 'String',
    required: true,
  },
  on_wishlist: {
    type: ['String'],
    required: true,
  },
  location_id: {
    type: 'String',
    required: true,
  },
});

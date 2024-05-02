import { LocationInterface } from './interface';
import LocationModel from './model';

import { FilterWishlistType, FilterLocationType } from 'mongoose/locations/custom';
import { QueryOptions } from 'mongoose';

export async function storeDocument(doc: LocationInterface): Promise<boolean> {
  try {
    await LocationModel.create(doc);
  } catch (error) {
    return false;
  }
  return true;
}

async function findLocations(
  filter: FilterLocationType | FilterWishlistType | {},
): Promise<LocationInterface[] | []> {
  try {
    let result: Array<LocationInterface | undefined> = await LocationModel.find(filter);
    return result as LocationInterface[];
  } catch (err) {
    console.log(err);
  }
  return [];
}

export async function findAllLocations(): Promise<LocationInterface[] | []> {
  let filter = {};
  return await findLocations(filter);
}

export async function findLocationsById(location_ids: string[]): Promise<LocationInterface[] | []> {
  let filter = { location_id: location_ids };
  return await findLocations(filter);
}

export async function onUserWishlist(user_id: string): Promise<LocationInterface[] | []> {
  let filter: FilterWishlistType = {
    on_wishlist: {
      $in: [user_id],
    },
  };
  return await findLocations(filter);
}

export async function updateWishlist(
  location_id: string,
  user_id: string,
  action: string,
): Promise<LocationInterface | null | {}> {
  let filter = { location_id: location_id };
  let options: QueryOptions = { upsert: true, returnDocument: 'after' };
  let update = {};
  switch (action) {
    case 'add':
      update = { $push: { on_wishlist: user_id } };
      break;
    case 'remove':
      update = { $pull: { on_wishlist: user_id } };
      break;
  }
  try {
    let result: LocationInterface | null = await LocationModel.findOneAndUpdate(
      filter,
      update,
      options,
    );
    return result;
  } catch (err) {
    console.log(err);
  }
  return {};
}

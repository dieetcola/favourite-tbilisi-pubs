import { FilterLocationType } from './custom';
import { LocationInterface } from './interface';
import LocationModel from './model';

import { QueryOptions } from 'mongoose';

async function findLocations(filter: FilterLocationType | {}): Promise<LocationInterface[] | []> {
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

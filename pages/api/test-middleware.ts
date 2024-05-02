import dbConnect from 'middleware/db-connect';
import { findAllLocations } from 'mongoose/locations/services';
import type { NextApiRequest, NextApiResponse } from 'next';
import { LocationInterface } from 'mongoose/locations/interface';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiResponse<LocationInterface> | void> {
  await dbConnect();

  let locations = await findAllLocations();
  return res.status(200).json(locations);
}

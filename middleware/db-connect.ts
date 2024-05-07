// import { storeDocument } from '@/mongoose/weather/services';
import mongoose from 'mongoose';
import { storeDocument } from 'mongoose/locations/services';

const DATABASE_URL = process.env.NEXT_PUBLIC_DATABASE_URL as string;

if (!DATABASE_URL) {
  throw new Error('Please define the DATABASE_URL environment variable inside .env.local');
}

//@ts-ignore
let cached = global.mongoose;

if (!cached) {
  //@ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    // @ts-ignore
    cached.promise = mongoose.connect(DATABASE_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  //   await storeDocument({
  //     address: '4 Galaktion Tabidze Street',
  //     cuisine: 'Caribbean',
  //     comment: 'Love this place ^^',
  //     rating: '10/10',
  //     name: 'Rum Roof Kitchen Bar',
  //     image: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/07/2d/79/rumroofkitchenbar.jpg',
  //     on_wishlist: [],
  //     location_id: '56018',
  //   });
  //   await storeDocument({
  //     address: '24 Galaktion Tabidze St',
  //     cuisine: 'Bar, Diner, Wine Bar, European',
  //     comment: 'Really 4 snobs ))))',
  //     rating: '7/10',
  //     name: 'SNOBS Bar',
  //     image: 'https://media-cdn.tripadvisor.com/media/photo-s/29/e1/9e/42/our-tasting-room.jpg',
  //     on_wishlist: [],
  //     location_id: '62432',
  //   });
  //   await storeDocument({
  //     address: 'Machabeli st. 14',
  //     cuisine: 'Bar, Pub, Street Food',
  //     comment: 'ok',
  //     rating: '7/10',
  //     name: 'Post Bar',
  //     image: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/50/c5/4e/more-than-50-types-of.jpg',
  //     on_wishlist: [],
  //     location_id: '62432',
  //   });
  //   await storeDocument({
  //     address: 'Samghebros k. 21',
  //     cuisine: 'Pub, Bar, European',
  //     comment: '',
  //     rating: '6/10',
  //     name: 'Drunk Owl Bar',
  //     image: 'https://media-cdn.tripadvisor.com/media/photo-s/29/70/12/8b/evening-at-drunk-owl.jpg',
  //     on_wishlist: [],
  //     location_id: '62432',
  //   });
  //   await storeDocument({
  //     address: 'Shalva Dadiani Street',
  //     cuisine: 'Pub, Bar, European',
  //     comment: 'Food <3',
  //     rating: '8/10',
  //     name: 'You Talk Too Much',
  //     image:
  //       'https://media-cdn.tripadvisor.com/media/photo-s/18/42/c0/f6/img-20190710-203414-largejpg.jpg',
  //     on_wishlist: [],
  //     location_id: '62432',
  //   });
  return cached.conn;
}

export default dbConnect;

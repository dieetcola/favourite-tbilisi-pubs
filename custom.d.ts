import mongoose from 'mongoose';
import { DefaultSession } from 'next-auth';

declare global {
  var mongoose: mongoose;
}

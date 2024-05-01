import { locationQueries } from '../graphql/locations/queris';
import { locationMutations } from '../graphql/locations/mutations';

export const resolvers = {
  Query: {
    ...locationQueries,
  },
  Mutation: {
    ...locationMutations,
  },
};

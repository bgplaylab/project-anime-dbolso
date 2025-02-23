import { GraphQLClient } from 'graphql-request';

const API_URL = 'https://graphql.anilist.co';

export const anilistClient = new GraphQLClient(API_URL);

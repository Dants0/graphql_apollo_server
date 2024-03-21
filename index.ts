import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './src/config/resolvers.js';
import { typeDefs } from './src/config/typeDefs.js';

  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);
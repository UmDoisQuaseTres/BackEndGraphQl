// npm install @apollo/server graphql
import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { TaskResolver } from "./src/TaskResolver";
import { buildSchema } from "type-graphql";

async function bootstrap() {
  const schema = await buildSchema({ resolvers: [TaskResolver] });

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at ${url}`);
}
bootstrap();

import "reflect-metadata";
import * as express from "express";
import * as bodyParser from  "body-parser";
import { createConnection, getManager } from "typeorm";
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import * as path from 'path'

// create typeorm connection
createConnection().then(connection => {

    // const userRepository = connection.getRepository(User);

    const PORT = 3000;
    const app = express();
    app.use(bodyParser.json());

    // grqphql types
    const typesArray = fileLoader(path.join(__dirname, './types'), { extensions: ['.js'] });
    const resolversArray = fileLoader(path.join(__dirname, './resolvers'), { extensions: ['.js'] });

    const typeDefs = mergeTypes(typesArray);
    const resolvers = mergeResolvers(resolversArray);

    // Put together a schema
    const schema = makeExecutableSchema({
      typeDefs,
      resolvers,
    });

    const entityManager = getManager();

    var models = require('require-all')({
      dirname : __dirname + '/entity'
    });

    app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { entityManager, models } }));

    app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

    // start express server
    app.listen(PORT, () => {
      console.log('server is running');
    });
});

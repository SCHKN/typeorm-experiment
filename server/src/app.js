"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express = require("express");
var bodyParser = require("body-parser");
var typeorm_1 = require("typeorm");
var apollo_server_express_1 = require("apollo-server-express");
var graphql_tools_1 = require("graphql-tools");
var merge_graphql_schemas_1 = require("merge-graphql-schemas");
var path = require("path");
// create typeorm connection
typeorm_1.createConnection().then(function (connection) {
    // const userRepository = connection.getRepository(User);
    var PORT = 3000;
    var app = express();
    app.use(bodyParser.json());
    // grqphql types
    var typesArray = merge_graphql_schemas_1.fileLoader(path.join(__dirname, './types'), { extensions: ['.js'] });
    var resolversArray = merge_graphql_schemas_1.fileLoader(path.join(__dirname, './resolvers'), { extensions: ['.js'] });
    var typeDefs = merge_graphql_schemas_1.mergeTypes(typesArray);
    var resolvers = merge_graphql_schemas_1.mergeResolvers(resolversArray);
    // Put together a schema
    var schema = graphql_tools_1.makeExecutableSchema({
        typeDefs: typeDefs,
        resolvers: resolvers,
    });
    var entityManager = typeorm_1.getManager();
    var models = require('require-all')({
        dirname: __dirname + '/entity'
    });
    app.use('/graphql', bodyParser.json(), apollo_server_express_1.graphqlExpress({ schema: schema, context: { entityManager: entityManager, models: models } }));
    app.use('/graphiql', apollo_server_express_1.graphiqlExpress({ endpointURL: '/graphql' }));
    // start express server
    app.listen(PORT, function () {
        console.log('server is running');
    });
});

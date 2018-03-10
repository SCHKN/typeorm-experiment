"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "\n  type Term {\n    name: String!\n  }\n\n  type Query {\n    terms: [Term]\n    term(id: ID!): Term\n  }\n\n  type Mutation {\n    createTerm(name: String!): Boolean!\n  }\n";

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "\n  type User {\n    name: String\n  }\n\n  type Query {\n    users: [User]\n    user(id: ID!): User\n  }\n\n  type SignUpResponse {\n    success: Boolean!\n    errors: [Error!]\n  }\n\n  type Mutation {\n    signup(name: String!, email: String!, password: String!): SignUpResponse!\n  }\n";

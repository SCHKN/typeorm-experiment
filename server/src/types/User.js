"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "\n  type User {\n    firstName: String\n    lastName: String\n  }\n\n  type Query {\n    users: [User]\n    user(id: ID!): User\n  }\n";

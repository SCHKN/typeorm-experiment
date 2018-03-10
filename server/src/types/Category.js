"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "\n  type Category {\n    name: String\n  }\n\n  type Query {\n    categories: [Category]\n    category(id: ID!): Category\n  }\n";

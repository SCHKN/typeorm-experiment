"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require("bcrypt");
var class_validator_1 = require("class-validator");
var toErrorType = function (errorArray) {
    var errorResultArray = [];
    for (var errorIterator in errorArray) {
        var error = errorArray[errorIterator];
        for (var _i = 0, _a = Object.getOwnPropertyNames(error.constraints); _i < _a.length; _i++) {
            var property = _a[_i];
            var reformatedError = { field: error.property, message: error.constraints[property] };
            errorResultArray.push(reformatedError);
        }
    }
    return errorResultArray;
};
exports.default = {
    Query: {
        users: function () { },
        user: function () { }
    },
    Mutation: {
        signup: function (obj, _a, _b, info) { return __awaiter(_this, void 0, void 0, function () {
            var password = _a.password, signUpArgs = __rest(_a, ["password"]);
            var entityManager = _b.entityManager, models = _b.models, otherArgs = __rest(_b, ["entityManager", "models"]);
            var hashedPassword, user, errors, saveUser, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, bcrypt.hash(password, 12)];
                    case 1:
                        hashedPassword = _c.sent();
                        return [4 /*yield*/, entityManager.create(models.User.User, __assign({}, signUpArgs, { password: hashedPassword }))];
                    case 2:
                        user = _c.sent();
                        return [4 /*yield*/, class_validator_1.validate(user)];
                    case 3:
                        errors = _c.sent();
                        if (errors.length > 0) {
                            return [2 /*return*/, {
                                    success: false,
                                    errors: toErrorType(errors)
                                }];
                        }
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, entityManager.save(user)];
                    case 5:
                        saveUser = _c.sent();
                        return [2 /*return*/, {
                                success: true
                            }];
                    case 6:
                        err_1 = _c.sent();
                        return [2 /*return*/, undefined];
                    case 7: return [2 /*return*/];
                }
            });
        }); }
    }
};

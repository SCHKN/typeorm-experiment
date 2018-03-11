import bcrypt = require("bcrypt")
import { validate } from 'class-validator'

const toErrorType = (errorArray) => {
  const errorResultArray = [];
  for (var errorIterator in errorArray) {
    const error = errorArray[errorIterator];
    for (var property of Object.getOwnPropertyNames(error.constraints)) {
        const reformatedError = { field: error.property, message: error.constraints[property] };
        errorResultArray.push(reformatedError)
    }
  }
  return errorResultArray;
}

export default {
  Query: {
    users: () => {},
    user: () => {}
  },
  Mutation: {
    signup: async(obj, { password, ...signUpArgs }, { entityManager, models, ...otherArgs }, info) => {
      // password checking
      if (password.length < 5 || password.length > 20) {
        return {
          success: false,
          errors: [{
            field: 'password',
            message: 'Your password needs to be between 3 and 20 characters'
          }]
        }
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await entityManager.create(models.User.User, { ...signUpArgs, password: hashedPassword });
      const errors = await validate(user);
      if (errors.length > 0) {
        return {
          success: false,
          errors: toErrorType(errors)
        }
      }
      try {
        const saveUser = await entityManager.save(user);
        return {
          success: true
        };
      } catch (err) {
        return undefined;
      }
    }
  }
}

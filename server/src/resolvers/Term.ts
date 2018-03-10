export default {
  Query: {
    terms: async(obj, args, { entityManager, models, ...otherArgs }, info) => {
      const terms = await entityManager.find(models.Term.Term);
      return terms;
    },
    term: async(obj, args, { entityManager, models, ...otherArgs }, info) => {
      const findTerm = await entityManager.findOne(models.Term.Term, args);
      console.log(findTerm);
      return findTerm;
    }
  },
  Mutation: {
    createTerm : async(obj, args, { entityManager, models, ...otherArgs }, info) => {
      const term = await entityManager.create(models.Term.Term, args);
      try {
        const saveTerm = await entityManager.save(term);
        return true;
      } catch (err) {
        return false;
      }
    }
  }
}

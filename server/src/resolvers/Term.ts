export default {
  Query: {
    terms: () => {},
    term: () => {}
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

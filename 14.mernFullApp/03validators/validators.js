import joi from 'joi'

export const allUsersQueryParamsValidator = (req, res, next) => {
  const schema = joi.object({
    minAge: joi.number().min(0).max(120).default(0),
    sortBy: joi.string().valid("name", "age", "createdAt").default("createdAt"),
    order: joi.string().valid("asc", "desc").default("asc"),
  });

  const { error, value } = schema.validate(req.query);
  if (error) {
    res.status(400).json({ error: error });
  } else {
    req.filter = { age: { $gte: value.minAge } };
    req.sortBy = value.sortBy;
    req.order = value.order === "asc" ? 1 : -1;
    next();
  }
};
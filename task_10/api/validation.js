const Joi = require('joi');

const validateUser = user => {
    // console.log("User for validation", user)
  const schema = Joi.object({
    user_id: Joi.number().required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });

  return schema.validate(user);
};

module.exports.validate = validateUser;

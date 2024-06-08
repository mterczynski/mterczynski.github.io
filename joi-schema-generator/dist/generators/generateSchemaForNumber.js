export function generateSchemaForNumber(value, {
  makeFieldsRequired = true
} = {}) {
  const required = makeFieldsRequired ? ".required()" : "";
  return `Joi.number()${required}`;
}

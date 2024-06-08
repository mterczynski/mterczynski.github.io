export function generateSchemaForBoolean(value, {
  makeFieldsRequired = true
} = {}) {
  const required = makeFieldsRequired ? ".required()" : "";
  return `Joi.boolean()${required}`;
}

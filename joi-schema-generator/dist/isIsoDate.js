import Joi from "../snowpack/pkg/joi.js";
export function isIsoDate(value) {
  try {
    Joi.attempt(value, Joi.string().isoDate().required()) ? `.isoDate()` : "";
    return true;
  } catch {
    return false;
  }
}

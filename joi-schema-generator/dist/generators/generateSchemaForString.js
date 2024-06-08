import isUUID from "../../_snowpack/pkg/is-uuid.js";
import * as EmailValidator from "../../_snowpack/pkg/email-validator.js";
import isIp from "../../_snowpack/pkg/is-ip.js";
import {isIsoDate} from "../isIsoDate.js";
export function generateSchemaForString(value, {
  makeFieldsRequired = true
} = {}) {
  const required = makeFieldsRequired ? ".required()" : "";
  const uuid = isUUID.anyNonNil(value) ? ".uuid()" : "";
  const email = EmailValidator.validate(value) ? ".email()" : "";
  const ip = isIp(value) ? `.ip()` : "";
  const isoDate = isIsoDate(value) ? ".isoDate()" : "";
  return `Joi.string()${uuid}${email}${ip}${isoDate}${required}`;
}

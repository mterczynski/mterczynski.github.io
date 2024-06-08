import {generateSchemaForBoolean} from "./generators/generateSchemaForBoolean.js";
import {generateSchemaForNumber} from "./generators/generateSchemaForNumber.js";
import {generateSchemaForString} from "./generators/generateSchemaForString.js";
import {wrapKeyWithQuotesIfNeeded} from "./wrapKeyWithQuotesIfNeeded.js";
const defaultSchemaGenerationSettings = {
  makeFieldsRequired: true,
  useTrailingCommas: false
};
export class SchemaGenerator {
  constructor() {
    this.INDENT_SIZE = 4;
    this.settings = defaultSchemaGenerationSettings;
  }
  generateSchemaFrom(data, nestLevel = 0, options = this.settings) {
    if (typeof data === "string") {
      return generateSchemaForString(data, {
        makeFieldsRequired: options.makeFieldsRequired
      });
    } else if (typeof data === "number") {
      return generateSchemaForNumber(data, {
        makeFieldsRequired: options.makeFieldsRequired
      });
    } else if (typeof data === "boolean") {
      return generateSchemaForBoolean(data, {
        makeFieldsRequired: options.makeFieldsRequired
      });
    } else if (Array.isArray(data)) {
      if (data.length === 0) {
        return `Joi.array()${this.getRequiredString(options.makeFieldsRequired)}`;
      }
      const itemsSchema = this.generateSchemaFrom(data[0], nestLevel + 1, {
        ...options,
        makeFieldsRequired: false
      });
      return `Joi.array().items(
${this.getPadding(nestLevel)}${itemsSchema}${options.useTrailingCommas ? "," : ""}
${this.getPadding(nestLevel - 1)})${this.getRequiredString(options.makeFieldsRequired)}`;
    } else if (typeof data === "object") {
      if (Object.keys(data).length === 0) {
        return `Joi.object({})${this.getRequiredString(options.makeFieldsRequired)}`;
      }
      const schemasOfEntries = Object.entries(data).map(([key, value]) => `${wrapKeyWithQuotesIfNeeded(key)}: ${this.generateSchemaFrom(value, nestLevel + 1)}`).join(`,
${this.getPadding(nestLevel)}`) + (options.useTrailingCommas ? "," : "");
      return `Joi.object({
${this.getPadding(nestLevel)}${schemasOfEntries}
${this.getPadding(nestLevel - 1)}})${this.getRequiredString(options.makeFieldsRequired)}`;
    }
    return "Joi.any()";
  }
  applySettings(settings) {
    this.settings = {...this.settings, ...settings};
  }
  resetSettings() {
    this.settings = defaultSchemaGenerationSettings;
  }
  getPadding(nestLevel) {
    return " ".repeat((nestLevel + 1) * this.INDENT_SIZE);
  }
  getRequiredString(makeFieldsRequired) {
    return makeFieldsRequired ? ".required()" : "";
  }
}

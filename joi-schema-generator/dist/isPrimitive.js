export function isPrimitive(value) {
  return value !== Object(value);
}

const isString = (val) => typeof val === "string";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
export { toRawType as a, isString as i, toTypeString as t };

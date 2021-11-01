/* eslint-disable no-template-curly-in-string */
// const typeTemplate = "The entered '${name}' format '${type}' is incorrect";
const typeTemplate = "فرمت '${name}' صحیح نیست";

export const Persian = {
  default: "مقادیر فیلد '${name}' معتبر نیست!",
  required: "وارد کردن '${label}' اجباری است",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' باید پر شود",
  date: {
    format: "'صحیح نیست ${name}' تاریخ",
    parse: "را بعنوان تاریخ نمایش داد '${name}' نمیتوان",
    invalid: "صحیح نیست '${name}' تاریخ",
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate,
  },
  string: {
    len: "'${name}' باید دقیقا ${len} کاراکتر باشد",
    min: "'${name}' باید حداقل ${min} کاراکتر باشد",
    max: "'${name}' نباید بیشتر از ${max} کاراکتر باشد",
    range: "'${name}' باید بین ${min} و ${max} کاراکتر باشد",
  },
  number: {
    len: "'${name}' باید برابر با ${len} باشد",
    min: "'${name}' نباید کمتر از ${min} باشد",
    max: "'${name}' نباید بزرگ تر از ${max} باشد",
    range: "'${name}' باید بین ${min} و ${max} باشد",
  },
  array: {
    len: "'${name}' باید دقیقا ${len} مقدار داشته باشد",
    min: "'${name}' نباید کمتر از ${min} مقدار داشته باشد",
    max: "'${name}' نباید بیشتر از ${max} مقدار داشته باشد",
    range: "'${name}' باید بین ${min} و ${max} مقدار داشته باشد",
  },
  pattern: {
    mismatch: "'${name}' با قالب ${pattern} برابر نیست",
  },
};

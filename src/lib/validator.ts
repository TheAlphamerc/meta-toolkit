export default class Validator {
  /**
   * Checks if the given object is not null, not undefined and not empty.
   * @param obj The object to check.
   * @returns True if the object is not null or undefined and not empty, false otherwise.
   * @memberof Validator
   * @example
   * Validator.hasValue(null); // false
   * Validator.hasValue(undefined); // false
   * Validator.hasValue({}); // false
   * Validator.hasValue({ a: 1 }); // true
   * Validator.hasValue([]); // false
   * Validator.hasValue([1]); // true
   * Validator.hasValue(''); // false
   * Validator.hasValue('a'); // true
   * Validator.hasValue(0); // true
   * Validator.hasValue(false); // true
   * Validator.hasValue(true); // true
   * Validator.hasValue(NaN); // true
   * Validator.hasValue(Infinity); // true
   * Validator.hasValue(-Infinity); // true
   */
  static hasValue(obj: any): boolean {
    if (obj === null || obj === undefined) {
      return false;
    }
    if (typeof obj === "object") {
      if (Array.isArray(obj)) {
        return obj.length > 0;
      } else {
        return Object.keys(obj).length > 0;
      }
    }
    if (Array.isArray(obj)) {
      return obj.length > 0;
    }
    if (typeof obj === "string") {
      return obj.length > 0;
    }
    return true;
  }

  /**
   * Check if given url is a valid url.
   * @param url The url to check.
   * @returns True if the url is valid, false otherwise.
   * @memberof Validator
   * @example
   * Validator.isUrl('https://www.google.com'); // true
   * Validator.isUrl('http://www.google.com'); // true
   * Validator.isUrl('www.google.com'); // true
   * Validator.isUrl('google.com'); // false
   * Validator.isUrl('google'); // false
   * Validator.isUrl(''); // false
   * Validator.isUrl(null); // false
   * Validator.isUrl(undefined); // false
   * Validator.isUrl(1); // false
   * Validator.isUrl({}); // false
   * Validator.isUrl([]); // false
   * Validator.isUrl(true); // false
   */
  static isUrl(url: string): boolean {
    if (!this.hasValue(url)) {
      return false;
    }
    const pattern = new RegExp(
      "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return pattern.test(url);
  }
}

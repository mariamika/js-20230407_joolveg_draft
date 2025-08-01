/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (!arr || arr.length === 0) { return []; }

  const newArr = new Set(arr);
  return Array.from(newArr.keys());
}

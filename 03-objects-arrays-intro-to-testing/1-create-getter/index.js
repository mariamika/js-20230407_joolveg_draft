/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const arrProps = path.split('.');
  let index = 0;

  return function stack(obj) {
    const hasProp = Object.hasOwn(obj, arrProps[index]);
    let result = hasProp ? obj[arrProps[index]] : undefined;

    if (index == arrProps.length - 1 || !result) {
      return result;
    }

    index++;
    return stack.call(this, result);
  };
}

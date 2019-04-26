function dummy () {
  return 1;
}
/**
 * Reverse an array
 * 
 * @example
 * 
 * reverse([1,2,3]) returns [3,2,1]
 * 
 * @param {array} array
 * @returns {array}
 */
function reverse (array) {
  return array.reverse();
}

/**
 * Reverse a string
 * 
 * @example
 * 
 * stringReverse('hello') returns 'olleh'
 * 
 * @param {string} text
 * @returns {string}
 * 
 */
function stringReverse (text) {
  return text.split('').reverse().join('');
}


/**
 * return a fixed length fibonacci list
 * 
 * @example
 * 
 * fibonacci(5) returns [1,1,2,3,5]
 * 
 * @param {number} length
 * @returns {array}
 */
function fibonacci (length) {
  let arr = [0, 1];
  for (let i = 2; i < length + 1; i++){
    arr.push(arr[i - 1] + arr[i -2])
  }
 return arr.slice(1)
}

/**
 * return the biggest number in the array
 * 
 * @example
 * 
 * biggest([1,3,5,7,9]) returns 9
 * 
 * @param {array} array
 * @returns {number}
 */
function biggest (array) {
  return Math.max.apply(null, array);
}

/**
 * Creates an array of numbers progressing from 
 * start up to, but not including, end
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * range(0,4) returns [0,1,2,3]
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns {array}
 */
function range (start, end) {
  var strs = [];
  for(var i = start; i < end; i++){
    strs.push(i);
  }
  return strs;
}

/**
 * Recursively flattens array.
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * flatten([1,[2,[3,4],[5,[6]]]]) returns [1,2,3,4,5,6]
 * 
 * @param {array} array
 * @returns {array}
 */
function flatten (items) {
  const flat = [];
  items.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });
  return flat;
}

module.exports = {
  dummy,
  fibonacci,
  reverse,
  flatten,
  biggest,
  flatten,
  stringReverse,
  range
};

exports.min = function min (array) {
  if (!Array.isArray(array) || array == '') {
    return 0
  } 
  return Math.min.apply(null, array)
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array == '') {
    return 0;
  } 
    return Math.max.apply(null, array)
  
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array == '') {
    return 0
  } 
    let sum = 0;
    for (let i = 0; i <= array.length - 1; i++) {
      sum += array[i];
    }
    return sum / array.length;
  
}

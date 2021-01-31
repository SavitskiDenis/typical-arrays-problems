const isArrayCorrect = array => array && array.length > 0

exports.min = function min (array) {
  return isArrayCorrect(array) ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  return isArrayCorrect(array) ? Math.max(...array) : 0;
}

exports.avg = function avg (array) {
  return isArrayCorrect(array) ? array.reduce((sum, el) => sum += el) / array.length : 0;
}

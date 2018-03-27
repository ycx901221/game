function randInt(n, m) {
  return Math.floor(Math.random() * (m - n)) + n;
}

var ArrayUtils = {};
ArrayUtils.swap = function(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

'use strict';

function compute_average(collection) {
  //在这里写入代码
  var s = collection.reduce(function(a,b){return (a+b)})
  return s/collection.length;
}

module.exports = compute_average;

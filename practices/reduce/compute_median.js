'use strict';

function compute_median(collection) {
  //在这里写入代码
  var arr = collection.sort(function (a,b) {
    return a - b;
    });
    var lowMiddle = Math.floor((arr.length - 1) / 2);
    var highMiddle = Math.ceil((arr.length - 1) / 2);
    return (Number(arr[lowMiddle]) + Number(arr[highMiddle])) / 2;
}

module.exports = compute_median;



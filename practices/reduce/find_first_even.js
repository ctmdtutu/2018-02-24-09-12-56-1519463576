'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var arr = [];
  for(let i in collection){if (collection[i]%2==0){
    arr.push(collection[i]);}
}
  return arr[0];
}

module.exports = find_first_even;


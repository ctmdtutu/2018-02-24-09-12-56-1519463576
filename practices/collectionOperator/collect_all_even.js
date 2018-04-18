'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var arr = [];
  for(let i in collection)
  {if (collection[i]%2==0) {
    arr.push(collection[i]);

  }}
    return arr;
}

module.exports = collect_all_even;

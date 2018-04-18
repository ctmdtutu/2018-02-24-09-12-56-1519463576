'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var arr = [];
  for (var i = 0; i < collection_a.length; i++) {
  collection_b.filter(
    function(value){
      return collection_a[i]%value==0 && arr.push(collection_a[i]);
    })

  }
return arr;
}

module.exports = choose_divisible_integer;
// var collection_a = [4,7,9,25,16,21,64,32,35,49];
// var collection_b = [2,3,5];
// choose_divisible_integer(collection_a,collection_b)

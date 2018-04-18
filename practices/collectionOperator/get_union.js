'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var collection_a = [10, 27, 28, 19, 5];
var collection_b = [5, 78, 28, 19, 23];
    var arr = [];
  for (var i = 0; i < collection_b.length; i++) {
    for (var j = 0; j < collection_a.length; j++) {
      if (collection_a[j]==collection_b[i]) {
        collection_b.splice(i,1);
      }
    }
  }
    return(collection_a.concat(collection_b));
}

module.exports = get_union;

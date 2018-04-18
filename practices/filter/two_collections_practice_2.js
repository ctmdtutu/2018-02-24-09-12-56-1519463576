'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.concat(collection_b).filter(v => !collection_a.includes(v) || !collection_b.includes(v));
}

module.exports = choose_no_common_elements;

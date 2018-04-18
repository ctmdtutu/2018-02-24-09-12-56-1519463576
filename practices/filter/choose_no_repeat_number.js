'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
var arr = Array.from(new Set(collection));
return arr;
}

module.exports = choose_no_repeat_number;

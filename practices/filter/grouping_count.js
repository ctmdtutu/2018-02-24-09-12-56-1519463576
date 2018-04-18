'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var map = {};
for(var i = 0;i<collection.length;i++){
var s = collection[i];
var r = map[s];
if(r){
map[s] +=1;
}else{
map[s] = 1;
}
}
return JSON.parse(JSON.stringify(map));
}

module.exports = grouping_count;

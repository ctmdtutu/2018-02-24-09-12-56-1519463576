'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var sum1=collection.map(function(element){
    return element%2!=0 && element*3+5;
 }).reduce(function(x,y){
   return x+y;
 },0);
 return sum1;
}

module.exports = hybrid_operation_to_uneven;


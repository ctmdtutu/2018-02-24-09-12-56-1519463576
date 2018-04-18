'use strict';

function amount_even(collection) {

  //在这里写入代码
  var temp=[];
  collection.map(function(element){
    return element%2==0 && temp.push(element);
  });
  var sum=temp.reduce(function(x,y){
    return x+y;
  },0);
  return sum;
}

module.exports = amount_even;

'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var result=new Array();
 
    collection.map(function(element){
    return  element%2==0 && result.push(String.fromCharCode(96+element)); 
  });
  return result;
}

module.exports = even_to_letter;

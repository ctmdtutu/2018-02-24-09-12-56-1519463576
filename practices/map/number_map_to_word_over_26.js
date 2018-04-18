'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(function(x){
    if (x<26) {
    return String.fromCharCode(x%26+96);
      }
    else return String.fromCharCode(x/26+96)+String.fromCharCode(x%26+96)})
};

module.exports = number_map_to_word_over_26;

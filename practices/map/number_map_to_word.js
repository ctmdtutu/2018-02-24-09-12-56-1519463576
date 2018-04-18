'use strict';
var number_map_to_word = function(collection){
  return collection.map(function(x){return String.fromCharCode(x%26+96)})
};

module.exports = number_map_to_word;

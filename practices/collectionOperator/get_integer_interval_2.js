'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var arr = [];
  // var max = (number_a>number_b)?number_a:number_b;
  // var min = (number_a<number_b)?number_a:number_b;
  if (number_a<number_b) {
    for (var i = number_a; i <= number_b; i++) {
      if (i%2==0) {
          arr.push(i);
      }

    }
  }
  if (number_a>number_b) {
    for (var i = number_a; i >= number_b; i--) {
      if (i%2==0) {
          arr.push(i);
      }
    }
  }
  if (number_a==number_b) {
      if (number_a%2==0) {
          arr.push(number_a);
      }
    }
    return arr;
  }

module.exports = get_integer_interval_2;

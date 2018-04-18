'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var arr = [];
  for(let i = number*100;;i = i - interval*100)
  {
    if (i<=0)
    {
      arr.push(i/100);
      break;  
    }
  
    arr.push(i/100);
  }
    return arr;
}

module.exports = spilt_to_zero;

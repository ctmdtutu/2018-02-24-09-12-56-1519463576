'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var arr = [];
  if (number_a<number_b)
  {
    for (var i = number_a; i <= number_b; i++)
    {
        // if ((i/26)<=1)
        // {
          arr.push(String.fromCharCode(((i+25)%26)+97));
        //}

        // else if ((i/26)>1)
        // {
        //   arr.push(String.fromCharCode((i-1)/26-1+97)+String.fromCharCode(((i+25)%26)+97));
        // }
    }
    return arr;
  }

  if (number_a>number_b)
  {
      for (var i = number_a; i >= number_b; i--)
    {
        // if ((i/26)>1)
        // {
          //arr.push(String.fromCharCode((i-1)/26-1+97)+String.fromCharCode(((i+25)%26)+97));
        //}
        // else if ((i/26)<=1)
        //   {
            arr.push(String.fromCharCode(((i+25)%26)+97));
        //   }
    }
    return arr;
  }


  if (number_a==number_b)
    {
      var i = number_a;
       //if ((i/26)>1)
      //  {
          //arr.push(String.fromCharCode((i-1)/26-1+97)+String.fromCharCode(((i+25)%26)+97));
        //}
        // else if ((i/26)<=1)
        //   {
             arr.push(String.fromCharCode(((i+25)%26)+97));
        //   }
      return arr;
    }
}

module.exports = get_letter_interval;

'use strict';
var calculate_median = function(collection){
    var result;
    var new_arr=new Array();
    var count=0;
    collection.filter(function(element,index){
        return index%2!=0 && new_arr.push(element) && count++;
    });
    if(count%2==0){
        result=(new_arr[count/2]+new_arr[count/2-1])/2;
    }else{
        result=(new_arr[Math.floor(count/2)]);
    }
    return result;
};
module.exports = calculate_median;

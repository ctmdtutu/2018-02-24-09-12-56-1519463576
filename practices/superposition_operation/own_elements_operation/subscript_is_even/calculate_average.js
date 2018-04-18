'use strict';
var calculate_average = function(collection){
    var result;
    var sum=0;
    var count=0;
    var temp=[];
    var temp1=collection.filter(function(element,index){
    return index%2-1 == 0 && temp.push(element) &&count++;
    });
    sum=temp.reduce(function(x,y){
        return x+y;
    },0);
    result=sum/count;
    return result;
};
module.exports = calculate_average;

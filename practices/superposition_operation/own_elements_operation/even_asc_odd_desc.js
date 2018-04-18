'use strict';
var even_asc_odd_desc = function(collection){
    var result=new Array();
    var ou_arr=[];
    var ji_arr=[];
    collection.filter(function(element,index){
        if(element%2==0){
            return ou_arr.push(element);
        }else{
            return ji_arr.push(element);
        }
    });
    ou_arr.sort(function(x,y){
        return x-y;
    });
    ji_arr.sort(function(x,y){
        return y-x;
    });
    result=ou_arr.concat(ji_arr);
   
    return result;
};
module.exports = even_asc_odd_desc;

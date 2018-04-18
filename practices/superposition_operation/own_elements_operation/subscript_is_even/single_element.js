'use strict';
var single_element = function(collection){
    var resul=new Array();

    var str=[];
     var str1=[];
    collection.filter(function(element,index,arr){
        if(index%2!=0){
            if(str.indexOf(element)==-1){
                return str.push(element);
            }else{
                return str1.push(element);
            }
        }
    });
    
    for(var i=0;i<str.length;i++){
        for(var j=0;j<str1.length;j++){
            if(str[i]==str[j]){
                str.splice(i,1);
            }
        }
    }
str.sort(function(x,y){
    return x-y;
});
    return str;
};
module.exports = single_element;

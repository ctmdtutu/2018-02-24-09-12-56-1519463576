'use strict';
var even_group_calculate_average = function(collection){
    var result=new Array();
    var sum1=0;
    var sum2=0;
    var sum3=0;
    var count1=0;
    var count2=0;
    var count3=0;
    collection.filter(function(element,index){
        var temp=element;
        if(index%2!=0){
            if(temp%2==0){
            if(temp/100>=1){
                sum3=sum3+element;
                return count3++;
            }else if(temp/10>=1){
                sum2=sum2+element;
                return count2++;
            }else{
                sum1=sum1+element;
                return count1++;
            }
        }
    }
    });
    
    
    if(count1==0 && count2==0 && count3==0){
        result.push(0);
    }else if(count1==0 && count2==0){
        result.push(sum3/count3);
    }else{
        result.push(sum1/count1);
        result.push(sum2/count2);
        result.push(sum3/count3);
    }

    return result;
};
module.exports = even_group_calculate_average;

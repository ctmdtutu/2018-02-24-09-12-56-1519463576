function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var arr=get_arr_count(collection_a);
  for(var i in arr){
    object_b.value.filter(function(element){
      if(arr[i].key==element){
        arr[i].count=arr[i].count-Math.floor(arr[i].count/3);
        return arr[i].count;
      }
    });
  }
return arr;
}
function get_arr_count(collection_a){
  var result=new Array();
  var new_array=new Array();
  for(var i=0;i<collection_a.length;i++){
    if(new_array[collection_a[i]]){
      new_array[collection_a[i]]++;
    }else{
      new_array[collection_a[i]]=1;
    }
  }
  for(var i in new_array){
    var temp={};
    temp.key=i;
    temp.count=new_array[i];
    result.push(temp);
  }
  return result;
}

module.exports = create_updated_collection;

function count_same_elements(collection) {
  //在这里写入代码
  let result = [];
  let arr = [];
  for(let i in collection){
    if (!arr[collection[i]]) {
      arr[collection[i]] = {};
      arr[collection[i]].key = collection[i];
      arr[collection[i]].count = 1;
    }
    else{
      arr[collection[i]].count++;
    }
  }
  for(let i in arr){
    result.push(arr[i]);
  }
  return result;
}

module.exports = count_same_elements;

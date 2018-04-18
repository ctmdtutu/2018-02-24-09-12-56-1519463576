function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var arr = [];
  for(let i = 0;i < collection_a.length;i++)
  {
    arr.push(collection_a[i].key);
  }
  return arr.filter(v=>object_b.value.includes(v));
}

module.exports = collect_same_elements;

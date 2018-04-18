function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for(var i in collection_a){
    object_b.value.filter(function(element){
      if(collection_a[i].key==element){
        collection_a[i].count=collection_a[i].count-Math.floor(collection_a[i].count/3);
        return collection_a[i].count;
      }
    });
  }
  return collection_a;
}

module.exports = create_updated_collection;

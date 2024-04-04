Model.aggregate([
    { group: { _id: null, value: { max: 'value'}}},
    { project: { _id: 0, value: 1}
]).
  then(function (res) {
    console.log(res);
    
});
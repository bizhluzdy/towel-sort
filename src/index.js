module.exports = function towelSort (matrix) {
  if (matrix === undefined || !matrix.length){
    return []
  }
  else{
  var result = (matrix[0]);
  for ( i=1; i<(matrix.length ) ; i++){
    let oppa = i % 2
    if (oppa === 0){
      result = result.concat(matrix[i])
    }
    else if (oppa != 0){
      result = result.concat(matrix[i].reverse())
    }}}
  return result
}

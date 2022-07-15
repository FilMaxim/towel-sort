module.exports = function towelSort (matrix) {
  let result = '';
  if (!Array.isArray(matrix) || !(matrix.length)) {
    return [];
  }
   for (let i = 0; i < matrix.length; i++) {
      if (i%2 === 0 || i === 0) {
    result = result + matrix[i].join(',') + ','
     } else {
       result = result + matrix[i].reverse().join(',') + ','
    }
  }
   result = result.slice(0, result.length - 1).split(',');
   let num = result.map((elem) => Number(elem))
   return num;
 }

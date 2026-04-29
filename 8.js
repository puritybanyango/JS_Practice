function doubleArray(arr){
  for(let i = 0; i < arr.length; i++){
    arr[i] *= 2;
  }
  return arr;

}
 let arr = [2,3,4,5,6];
console.log(doubleArray(arr));
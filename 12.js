function findLargest(number) {
  let largest = number[0];
  for (let i = 1; i< number.length; i++ ) {
    if (number[i] > largest) {
      largest = number[i];
    }
  }
  console.loga(largest);
}
findLargest ([13,17,8,22,5,44]);

function findSmallest(number) {
  let smallest = number[0];
  for(let i = 1; i < number.length; i++) {
    if (smallest > number[i]) {
      smallest = number[i];
    }
  }
  console.log(smallest);

}
findSmallest([3,17,8,22,5,44]);
findSmallest([39,24,5,213]);
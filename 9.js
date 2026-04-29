function findCheck(arr, target){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      console.log("Found it!");
    
    }
    else{
      continue;
    }
  }
}

let arr=["a", "b", "c","d"];
let target="c";

findCheck(arr, target);
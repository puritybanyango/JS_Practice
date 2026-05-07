function countVowels(text) {
  let counter = 0;
  for (let i = 0; i< text.length; i++) {
    if (text[i] == "e" || text[i] == "o" || text[i] == "i"|| text[i] =="a" || text[i]== "u"){
      counter++;
    }
  }
  console.log(counter);
}
countVowels('people are awesome');

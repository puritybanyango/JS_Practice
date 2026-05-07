function reverseString(text) {
  let rev = "";
  for (let i = text.length-1; i >=0; i--)
  {
    //let rev+text[i];
    rev = rev+text[i];
  }
  console.log(rev);
}
reverseString("hello");

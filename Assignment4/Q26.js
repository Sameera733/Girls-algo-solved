// Function to check whether a given character is an alphabet or not
function isAlphabet(char) {
    const asciiCode = char.charCodeAt(0);
    return (asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122);
  }  

  console.log(isAlphabet('A')); // true
  console.log(isAlphabet('a')); // true
  console.log(isAlphabet('1')); // false
  console.log(isAlphabet('&')); // false

//   another method
function isalphabet(char){
    return /^[A-Za-z]$/.test(char);
}
let character = '0'
if(isalphabet(character)){
    console.log(`${character}`,  "is a alphabet")
}
else{
    console.log(`${character}`, "is not a alphabet")
}

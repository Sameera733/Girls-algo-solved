function ispalindrome(str){
    let reversed='';
    for (let char of str){
        reversed =char+reversed;
    }
    return reversed === str;
}
console.log(ispalindrome("dada"))


// another method

function isPalindrome(str) {
    // Remove any non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
  
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === reversedStr;
  }
  
  // Test the isPalindrome function
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false
  console.log(isPalindrome("A man a plan a canal Panama")); // true


//   another method
// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input
const string = "madam"

checkPalindrome(string);
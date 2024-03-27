// Function to remove duplicate elements from an array
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Test array with duplicate elements
var array = [1, 2, 3, 4, 2, 3, 5, 6, 1];

// Call the function to remove duplicates
var resultArray = removeDuplicates(array);

// Print the array without duplicates
console.log("Array without duplicates:", resultArray);




// another method
// Function to remove duplicate elements from an array
function removeDuplicates(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  }
  
  // Test the function
  const arr = [1, 2, 2, 3, 4, 4, 5, 9, 6, 6];
  console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5, 6]
  
  const arr2 = ['apple', 'banana', 'banana', 'orange', 'grape', 'grape'];
//   console.log(removeDuplicates(arr2)); // ['apple', 'banana', 'orange', 'grape']
// The indexOf method returns the index of the first occurrence of the specified value
//  in the array, and if the value is not found, it returns -1.


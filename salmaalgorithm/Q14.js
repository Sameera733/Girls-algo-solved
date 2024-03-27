function findMedian(arr) {
    // Sort the array in ascending order
    arr.sort(function(a, b) {
      return a - b;
    });
  
    // Calculate the middle index
    var middleIndex = Math.floor(arr.length / 2);
  
    // Check if the array length is even or odd
    if (arr.length % 2 === 0) {
      // If even, return the average of the two middle elements
      return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    } else {
      // If odd, return the middle element
      return arr[middleIndex];
    }
  }
  
  var myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5,9];
  var median = findMedian(myArray);
  console.log("Median:", median);
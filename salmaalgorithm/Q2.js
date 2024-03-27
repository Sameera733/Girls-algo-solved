// Even Numbers Less Than N
const N=10

function generateEvenNumbersLessThanN(N){
    let evenNumbers=[];
    
    for( let i=0;i<N;i+=2){
 
    evenNumbers.push(i)

    }
    return evenNumbers;
}

console.log(`Generate Even Numbers Less Than ${N}`, generateEvenNumbersLessThanN(N))

 // Odd Numbers Less Than N

 function generateOddNumbersLessThanN(N){
    let oddNumbers=[];
    
    for( let i=1;i<N;i+=2){
 
    oddNumbers.push(i)

    }
    return oddNumbers;
  }


console.log(`Generate odd Numbers Less Than ${N}`, generateOddNumbersLessThanN(N))


// Function to Generate N Even Numbers

 function generateNEvenNumbers(N) {
    let evenNumbers=[]
     
    for (let i = 0; evenNumbers.length<N; i += 2) {
       
      //console.log(i)
      //evenNumbers.push(i)
      evenNumbers.push(i)
   
    }
   return evenNumbers;
    
  }

  
console.log(`Generate ${N} Even Numbers`, generateNEvenNumbers(N));

  // Function to Generate N Odd Numbers
  

 function generateNOddNumbers(N) {
    let oddNumbers=[]
     
    for (let i = 1; oddNumbers.length<N; i += 2) {
       
      //console.log(i)
      //evenNumbers.push(i)
      oddNumbers.push(i)
   
    }
   return oddNumbers;
    
  }

  console.log(`Generate ${N} Odd Numbers`, generateNOddNumbers(N));



  
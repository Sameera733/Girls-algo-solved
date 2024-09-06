/*
    1) Write a Loop that prints even numbers from 1-100
*/

// let count = 0;
// for(let i = 0; i <=100; i++){
//     if (i%2==1){
//         console.log(i);
//     }
//     count++;
// }
// console.log('The number of even numbers from 1-100: ',count);

/*
    1) Write a Loop that prints even numbers from 1-100
*/

// let count = 0;
// // let str = '';
// for(let i = 0; i <=50; i++){
//     console.log(2*i);
//     count++;
// }
// console.log('The number of even numbers from 1-100: ',count);


// Function
// output: 2 4 6 8 10
// function evenSeries(start,end){
//     let count = 0;
//     let temp = '';
//     for(let i = start/2; i <=end/2; i++){
//         temp += (2*i) + '\t';
//         count++;
//     }
//     console.log(temp);
//     console.log('The number of even numbers from 1-100: ',count);

// }
// evenSeries(1500,3000);


// even series: I will give my start value and end value. even numbers in between.

function isPrime(num){
    let factors = 0;
    for(let i = 2; i<num;i++){
        if (num % i == 0){    //200%2=0, 200%3=  ,200%4=0 , 200%5=  , 200%6=,  200
            factors++;
            break;
            console.log(`The factor is ${i}`);
        }
    }
    return factors == 0 ? true : false;
  }
  console.log(isPrime(200));
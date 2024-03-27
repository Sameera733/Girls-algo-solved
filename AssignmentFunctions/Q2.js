/*let n=20;
function EvenOdd(){
    for(let i=0;i<=20;i++)
{
    if(i%2===0){
       console.log("The Even Number is",i++);
   
    }  
   else{
    console.log("The Odd number is",i);
   }
}
}
console.log(EvenOdd());*/

function Even(n)
{
    // let Even=[];
    console.log("The Even Numbers less than 10 are");
    for (let i=0;i<n;i+=2){
        console.log(i);
    }
}
Even(10);

function Odd(n)
{
    console.log("The Odd numbers less than 10 are");
    for (let i=1;i<n;i+=2){
        console.log(i);
    }
}
Odd(10);

function even10(){
    console.log("First 10 Even Numbers are");
    let even=[]
    for (let i=0;even.length<10;i+=2){
    even.push(i);
    console.log(i);
      }
}
even10();

function Odd10(n){
    console.log("First 10 Odd Numbers are");
    let even=[]
    for (let i=1;even.length<n;i+=2){
    even.push(i);
    console.log(i);
    }
}
Odd10(10);

function even(n){
    console.log("The first 5 odd numbers are")
    for(let i=1;i<10;i+=2){
       console.log(i)
    }
}
even(10);




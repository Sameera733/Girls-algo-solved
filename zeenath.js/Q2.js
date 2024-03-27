//even num less than n
function genEvennumberslessthann(n){
    let evennumbers=[]
    for(i=0;i<10;i+=2){
evennumbers.push(i)
}
return evennumbers;
}
console.log("generate even numbers less than n", ":",genEvennumberslessthann(10))
//odd numbers less than n
function oddnumberslessthann(n)
{
    let oddnumbers=[]
    for(i=1;i<n;i+=2){
        oddnumbers.push(i)
    }
    return oddnumbers
}
console.log("generate odd numbers less than n", ":",oddnumberslessthann(10))

//function to generate n even numbers
function generatenevennumbers(n){
    evennumbers=[]
    for(i=0;evennumbers.length<n;i+=2){
    evennumbers.push(i)
}return evennumbers
}console.log("generate even numbers less than n", ":",generatenevennumbers(10))

//function to generate odd numbers less than n
function gennoddnumbers(n){
    oddnumbers=[]
    for(i=1;oddnumbers.length<n;i+=2){
        oddnumbers.push(i)
    }
    return oddnumbers
}console.log("generate odd numbers less than n", ":",gennoddnumbers(10))


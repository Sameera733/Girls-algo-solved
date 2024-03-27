let input;
function EvenOdd(input){
let Even = !(input%2);
if(Even){
    console.log("it's an Even number", input);
}else{
    console.log("it's an Odd number", input);
}
return;
}
EvenOdd(3);

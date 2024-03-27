let N;
function listEvenOdd(N){
let Even = [2];
let Odd = [1];
for(i=3;i<=N;i++){
    let even = !(i%2);
    if(even){
        Even.push(i);
    }else{
        Odd.push(i);
    }
}
console.log(Even);
console.log(Odd);
return;
}
listEvenOdd(100);
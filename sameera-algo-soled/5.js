// 5 3 d = D*q + r
// let Dividend = 20;
// let Divisor = 3;
// for(let q=0;q<Dividend;q++){
//     if(Dividend==Divisor*q){
//         console.log("Remainder is 0 for above")
//     }else{
        
//         //let Remainder = Dividend/(Divisor * q);
//         let Remainder = Dividend-(parseInt(Dividend/Divisor)*Divisor)
//         console.log("Remainder is " +Remainder )
//     }
// }



function getRemainder(num, divisor)
{
    let t = (num - divisor * 
         parseInt(num / divisor));
    return t;
}
 
// Driver 
res = getRemainder(10, 3);
console.log(res);

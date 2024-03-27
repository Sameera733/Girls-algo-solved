

function remainderwithoutmod(dividend,divisor)
{
    if(divisor==0){
        return " cannot be divided with zero"
    }
    else if(divisor>=dividend){
        return "dividend less than divisor"
    }
   while(dividend>=divisor){
     dividend=dividend-divisor
   }
return dividend;

}console.log(remainderwithoutmod(10,4))
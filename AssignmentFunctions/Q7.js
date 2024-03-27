function fizzbuzz(){
    for (i=0;i<=100;i++){
        if(i%3==0 & i%5==0){
            console.log("Fizz Buzz",i);
        }
        else if(i%3==0)
        {
            console.log("Fizz",i)
        }
        else if(i%5==0)
        {
            console.log("Buzz",i);
        }
        else
        {
            console.log("The given number is not divisible by 3 or 5");
        }
    }
}
fizzbuzz();
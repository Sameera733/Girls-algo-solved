function primenumberslessthan(n){
    var genprimenumber=[];
        for(let i=2;i<n;i++){
           let isprime =true
           for(let j=2;j<i;j++){
         if(i%j===0){
            isprime =false
            break;
         }
        }
        
        if(isprime){
         genprimenumber.push(i)
         
        }
        }
    return genprimenumber

}
const n=10
console.log(primenumberslessthan(n))
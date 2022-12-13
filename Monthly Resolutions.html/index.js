let num = 0;
while(num<50){
    if (num % 3==0 && num % 5==0){
        console.log('FizzBuzz')
    }
    else if(num % 5 ==0 ){
        console.log("Buzz")
    }
    else if(num % 5 ==0){
        console.log("Fizz")
    }
    else{
        console.log(num)
    }
    num += 1
}
let num = 0;
while (num<100){

    num++;
    if (num % 15 == 0) {
        console.log('FizzBuzz');
    }else if  (num % 3 == 0) {
            console.log('Fizz');
    }else if (num % 5 == 0) {
            console.log('Buzz');
    }else if (num % 15 ) {
        console.log(num);
    }else if  (num % 3 ) {
        console.log(num);
    }else if (num % 5) {
        console.log(num);
    }

}
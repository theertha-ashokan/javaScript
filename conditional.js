//coditional statements

//1)if else statements
  
// x = 10
// if(x==10)
//     {
//     console.log('given value is10');
//     }
//     else{
//        console.log('given value is not 10'); 
//     }


//write a program to check given value is positive or negative

// x = -10
// if(x>0)
// {
//   console.log('the number is positive'); 
// }
// else if(x<0)
// {
//     console.log('the number is negative'); 
// }
// else
// {
//     console.log('the number is zero'); 
// }


//write a program to check the given number is odd or even

x = 6

if(x%2==0)
{
    console.log('number is even');
}
else{
    console.log('number is odd');
}
console.log(x%2==0?'number is even':'number is equal')//using ternary operator 



//w.a.p to check the largest amonng two given numbers

// num1 = 15
// num2 = 30

// if(num1 > num2)
// {
//     console.log('largest number is num1');
// }
// else if(num2 > num1)
// {
// console.log('largest is num2');
// }
// else
// {
//     console.log('both are equal');
// }




//check the second largest number from the given different number and and arrange them in decending order.

// num1 = 50
// num2 = 20
// num3 = 30

// if(num1>num2 && num1>num3)
//   {
//     if(num2>num3)
//     {
//         console.log(`second largest is ${num2}`);
//         console.log(`decenting order is ${num2}> ${num1}> ${num3}`);
        
//     }
//     else
//     {
//       console.log(`second largest is ${num3}`);
//         console.log(`decenting order is ${num2}> ${num3}> ${num1}`);  
//     }
//   }
//   else if(num2>num1 && num2>num3)
//   {
//      if(num1>num3)
//     {
//         console.log(`second largest is ${num1}`);
//         console.log(`decenting order is ${num2}> ${num1}> ${num3}`);
        
//     }
//     else
//     {
//       console.log(`second largest is ${num3}`);
//         console.log(`decenting order is ${num2}> ${num3}> ${num1}`);  
//     }
//   }
//   else if(num3>num1 && num3>num2)
//   {
//      if(num1>num2)
//     {
//         console.log(`second largest is ${num1}`);
//         console.log(`decenting order is ${num3}> ${num1}> ${num2}`);
        
//     }
//     else
//     {
//       console.log(`second largest is ${num2}`);
//         console.log(`decenting order is ${num3}> ${num2}> ${num1}`);  
//     }
//   }
//   else{
//     console.log('invalid');
    
//   }




//w.a.p to print 'fizz' is the number is divisible by 3,'buzz' if the number is divisible by 5 and 'fizzbus' number divisible by 15

// number=6
// if(number % 15==0)
// {
//     console.log('print fizzbus');
    
// }
// else if(number % 5==0)
// {
//     console.log('print buzz');
    
// }
// else if(number % 3==0)
// {
//      console.log('print fizz');
// }
// else{
//     console.log('not diviisible by any nnumber');
    
// }
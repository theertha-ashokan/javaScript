// w.a.p.prinnt the number 1-5

// for(i=1;1<=5;i++)
// {
//     console.log(i);
    
// }
// console.log('----------------------------------------');

//w.a.p.to print factorial of a given number using for loop
// x = 5
// fact = 1
// for(i=1;i<=5;i++){
//     fact=fact*i
    
// }
// console.log(fact);
// console.log('----------------------------------------');


//w.a.p to find a given number is prime or not
 
num = 5
isprime = true
if(num<=1){
    console.log('neither prime nor composite');  
}
else{
    isprime = true;
    for(i=2;i<num;i++){
        if(num % i == 0)
        {
            isprime = false;
            break;
        }
    }
    if(isprime)
    {
        console.log('prime');
        
    }
    else{
        console.log('not prime');
        
    }

}
    console.log('----------------------------------------');


//w.a.p.to print all prime numbers btwn 2-50

for(i=2;i<=50;i++){
    isprime = true

    for(j = 2; j<i ;j++)
        {
        if(i%j==0)
            {
            isprime = false
        break
        }
    }
    isprime && console.log(i);

}

console.log('----------------------------------------');






//w.a .p to print all amstrong numbers btwn 8 - 500

// num = 4567
// count = (number + "").length
// console.log(count);


for (i=8;i<=500;i++){
    power = (i + "").length
temp =1
rem = 0
sum = 0
while (temp>0)
{
rem=temp%10
sum+= rem**power
temp=Math.floor(temp/10)
}
sum==i && console.log(i);

}
console.log('------------------');





// amstrong
//prime
//natural numbers
//mathematical logics



//w.a.p.to find the hiest common factor of two numbers
//12-factors = 1,2,3,4,6,12
//28-factor = 1,2,4,7,14,28
//common factors = 1,2,4
//hiest common factor = 4

num1 = 12
num2 = 28
hcf = 0
temp = num1<num2 ? num1:num2;
for(i=1;i<temp;i++){
    if(num1%i==0 && num2%i==0){
        hcf=i
    }
  
}
console.log(hcf);






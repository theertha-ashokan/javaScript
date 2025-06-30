//function

//w.a.pto print 'javascript' using function
function display(){
     console.log('javaScript');
     
}
display()

//w.a.p.to print sum of two given numbers

num1 = 30
num2 = 40
function sumnumber(num1,num2) {
     sum = num1 +num2
     console.log(sum);
     
}
sumnumber(num1,num2)
sumnumber(60,20)
sumnumber(50,)

//outside the function
num1 = 30
num2 = 40
function sumnumber(num1,num2) {
    return sum = num1 +num2     
}

     
console.log (sumnumber(num1,num2))
console.log (sumnumber(50,50))

console.log('-------------');


//w.ap.to display a given number is positive or negative
num=4
function posnum(num) {
     if(num>0){
          console.log('num is positive');
     }
     else if(num<0){
          console.log('num is negative');
     }
     else {
          console.log('num is zero');
          
     }
          
}
posnum(num)
console.log('----------------------------');



//w.a.p to display a given number is od or even

num = 5
function numberss(num){
     if (num%2==0){
          console.log('numm is even');
          
     }
     else{
          console.log('num is odd');
          
     }
}
numberss(num)

console.log('--------------------');


//w.a.p.display a greatest number among two given numbers
num1 =5
num2 = 7
function high(num1,num2) {
     if(num1>num2){
          console.log('num1 is greater');
          
     }
     else if(num2>num1){
           console.log('num2 is greater');
           
     }
     else{
          console.log('number is equal');
          
     }
}
high(num1,num2)

console.log('----------------------------');


//w.ap. display cube of a givrn number using functions

num = 3
function cube(num) {
     console.log(num**3);
     
}
cube(num)
console.log('----------------------------');

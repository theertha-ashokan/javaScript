
const cube=(num)=>num**3
console.log(cube(4));
console.log('----------------------------');



const posnum=(num)=> {
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
posnum(5)
console.log('----------------------------');




const numberss=(num)=>{
     if (num%2==0){
          console.log('numm is even');
          
     }
     else{
          console.log('num is odd');
          
     }
}
numberss(7)

console.log('--------------------');



const high=(num1,num2)=> {
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
high(5,2)

console.log('----------------------------');

//HW
//prime,amstorng,palitrom,hcf,factorial
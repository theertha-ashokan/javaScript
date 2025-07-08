a = [10,11,12,113,14,15]
//write a prgrm to print all even numbers from the given array
ev = a.filter((n1)=>n1%2==0)
console.log(ev);
console.log('-----------------------------');


//w.a.p.to print the first  even number from the given array

ev1 = a.find((n1)=>n1%2==0)
console.log(ev1);
console.log('------------------------');

//w.a p.to check  wheather there is even number in the given number
ev2 = a.some((n1)=>n1%2==0)
console.log(ev2?'present':'not present');

 



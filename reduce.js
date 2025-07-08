a = [10,11,12,13,14,15]

//find highest
high = a. reduce((n1,n2)=>n1>n2?n1:n2)
console.log(high);

console.log('----------------------');


//lowest
low = a. reduce((n1,n2)=>n1<n2?n1:n2)
console.log(low);

console.log('----------------------');

//sum
sum = a. reduce((n1,n2)=>n1+n2)
console.log(sum);

//product
product = a. reduce((n1,n2)=>n1*n2)
console.log(product);

console.log('-------------------------------');





// expense = [15000,25000,50000,30000,65000]

//w.a.p find the lowest expence//using array reduce method
let expense = [15000, 25000, 50000, 30000, 65000];

low = expense.reduce((exp1,exp2)=>exp1<exp2?exp1:exp2)
console.log(low);
console.log('-------------------------------');


//find the lowest expense

high = expense.reduce((exp1,exp2)=>exp1>exp2?exp1:exp2)
console.log(high);
console.log('-------------------------------');


//find total

sum = expense.reduce((exp1,exp2)=>exp1+exp2)
console.log(sum);

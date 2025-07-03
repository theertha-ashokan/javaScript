// expense = [15000,25000,50000,30000,65000]

//w.a.p find the lowest expence//using of method
let expense = [15000, 25000, 50000, 30000, 65000];

let lowest = expense[0];

for (let item of expense) {
  if (item < lowest) {
    lowest = item;
  }
}
console.log(lowest);
console.log('-------------------------------');



//w.a.p find the highest expence

highest = expense[0]
for(let item of expense){
    
    if(item>highest){
        highest = item
}
}
console.log(highest);

console.log('-------------------------');


 expense = [15000, 25000, 50000, 30000, 65000];

let sum = 0;
for (let item of expense) {
  sum += item;  //  Add item to sum
}

console.log("Total Expense:", sum); // Output: 140000



//w.a.p.to print whether 2 is present or not
//a = [10,11,12,2,3,4]

let a = [10, 11, 12, 2, 3, 4];
for (let item of a) {
  if (item === 2) {
    found = true;
    break; // stop loop once 2 is found
  }
}

if (found) {
  console.log("2 is present");
} else {
  console.log("2 is not present");
}

weekday = ['mon', 'tue', 'wed', 'thu', 'fri']
console.log(weekday);

console.log(typeof (weekday));//output will be object

//if we want to print monday only

console.log(weekday[0]);//console.log(function name[array index number])
console.log(weekday[2]);

console.log('--------------------');

//using normal for loop(we can access index)

for (i = 0; i <= weekday.length - 1; i++) {
    console.log(weekday[i]);

}

console.log('--------------------');

//using for in(we can acces index)
for (let i in weekday) {
    console.log(weekday[i]);
}

console.log('--------------------');

//for of method(directly get the item)
for(let i of weekday){
    console.log(i);
    
}

console.log('--------------------');
//push(addding ito the array)
weekday.push('sat')
console.log(weekday);


//array can hold different data types.eg:
weekday.push('3')
console.log(weekday);

console.log('--------------------');


//add monday to the begining of the input
weekday = ['mon', 'tue', 'wed', 'thu', 'fri']
weekday.unshift('sun')
console.log(weekday);

console.log('--------------------');

//unshift always add to the beginning of the array
weekday = ['mon', 'tue', 'wed', 'thu', 'fri']
weekday.unshift('7')
console.log(weekday);
console.log('--------------------');

//pop
weekday = ['mon', 'tue', 'wed', 'thu', 'fri']
weekday.pop()
console.log(weekday);

//shift
weekday = ['mon', 'tue', 'wed', 'thu', 'fri']
weekday.shift()
console.log(weekday);


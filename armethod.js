//employeee pogram using array methods

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
employee.forEach((item)=>console.log(item[1]))
console.log('------------------------------');


//print total numbers of employee
sum = employee.reduce((emp1,emp2)=>emp1+emp2)
console.log(sum);


console.log('------------------------------');


//print developer employee details
console.log('develpoper employee details');
employee.filter((item)=>item[2]=='developer').forEach((item)=>console.log(item));


console.log('------------------------------');


//print employee whose salary > 30000

x=employee.filter((emp)=>emp[4]>30000).forEach((emp)=>console.log(emp[1]));


console.log('------------------------------');


// print details of employee Laisha
 emp = employee.find(emp => emp[1] === 'Laisha');
console.log(emp);
console.log('------------------------------');

//sort employee based on their salary in descending orde
salarySorted = employee.sort((a, b) => b[4] - a[4]);
console.log(salarySorted);
console.log('------------------------------');



//sort employee based on their experience in ascending order
exp = employee.sort((a, b) => a[5] - b[5]);
console.log(exp);
console.log('------------------------------');




// print the employ name whose have the higest salary

//using array method
highestPaid = employee.reduce((emp1, emp2) => (emp1[4] > emp2[4] ? emp1 : emp2));
console.log(highestPaid[1]);

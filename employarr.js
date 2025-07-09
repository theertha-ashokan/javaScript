//nested array

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
for (let item of employee){
    console.log(item[1]);
    
}

console.log('------------------------------');


//print total numbers of employee
console.log(employee.length);

console.log('------------------------------');


//print developer employee details
for(let emp of employee){
    if(emp[2]==='developer'){
        console.log(emp);
        
    }
}
console.log('------------------------------');


//print employee whose salary > 30000

for(let emp of employee){
    if(emp[4]>30000){
        console.log(emp);
        
    }
}

console.log('------------------------------');

// print details of employee Laisha

for(let emp of employee){
    if(emp[1]==='Laisha'){
        console.log(emp);
        
    }
}

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
highsal = employee.sort((emp1,emp2)=>emp2[4]-emp1[1])[8][1]
console.log(highsal);

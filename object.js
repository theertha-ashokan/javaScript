//[id, name, designation, location, salary, experience]

employees =
    [1000, 'Neel', 'developer', 'kochi', 25000, 3]
//empid,empname,desig,loc,sal,exp
console.log(employees);
console.log(employees[1]);     //array




employees = {
    empId: 1000,
    empName: 'Neel',                 //obect
    empdesig: 'Developer',
    sal: 250000,
    exp: 3
}
console.log(employees);
console.log(employees['empName']);
console.log(employees.empName);
console.log('-----------------------');
//get into object
for (let key in employees) {
    console.log(employees[key]);

}
//add into object
employees['emplocation'] = 'kochi'
console.log(employees);


//object.assign
Object.assign(employees, { empexp: 3, vaccinated: true })
console.log(employees);
console.log('--------------------');


//update
employees['empexp'] += 2
console.log(employees);

console.log('---------------------');


employees['empeName'] = 'neel p'
console.log(employees);


//delete
delete employees.vaccinated
console.log(employees);




//w.a.p.to check 'emploc' key is present in the given object.if yes print the value else print not present.

employees = {
    empid: 1000,
    empname: 'Neel',
    desig: 'developer',
    emploc: 'kochi',
    sal: 25000,
    exp: 3
};
if ('emploc' in employees) {
    console.log(employees.emploc);
} else {
    console.log('not present');
}
console.log('---------------------');

//we can short the code 
'emploc' in employees ? console.log(employees['emploc']) : console.log('not present');



//w.a.p to check 'empgender' key is present in the given object.if yes print the value else add a new value
employees = {
    empid: 1000,
    empname: 'Neel',
    desig: 'developer',
    emploc: 'kochi',
    sal: 25000,
    exp: 3
};

if ('empgender' in employees) {
    console.log(employees.empgender);
} else {
    employees.empgender = 'female';
    console.log("Key added:", employees);
}
console.log('--------------------------------');

'empgender' in employees ? console.log(employees['empgender']) : employees['empgender'] == 'Male';
console.log(employees);


console.log('--------------------------------------------------------------------------------------------');







//strudent questions

student = [101, 'Anjali', 'BCA', 'Calicut', 85, 2022]
// studid, studname, course, location, mark, passoutYear

student = {
    studid: 101,
    studname: 'theertha',
    course: 'BCA',
    location: 'Calicut',
    mark: 85,
    passyear: 2022
}

console.log(student);
console.log('-----------');

console.log(student.studname);
console.log('-----------');


console.log(student['studname']);
console.log('-----------');

//1...W.A.P to get and print the student's course 
//two methods

//1.objectname['key']
//2.objectname.key

console.log(student['course']);
//2
console.log(student.course);
console.log('-----------');


//2...W.A.P to add a new key gender with value 'female' 

//1.objectname['key'] = value
//2.Object.assign()

student['gender'] = 'female'
console.log(student);

//2
student = Object.assign(student, { gender: 'female' })
console.log(student);
console.log('-----------');



//3...W.A.P to update the mark to 90 using:
// objectname['key'] = value

student['mark'] = 90
console.log(student);
console.log('------------');



//4...W.A.P to delete the key location from the student object using:
//delete objectname.key

delete student.location;
console.log(student);
console.log('---------------');


//5...W.A.P to check if 'mark' key exists in student object or not. If it exists, print the value.

if ('mark' in student) {
    console.log("Mark:", student.mark);
} else {
    console.log("Key 'mark' not found");
}
console.log('---------------------');



//6...W.A.P to check if passoutYear exists in the student object. If not, add passoutYear is 2022.
if ('passyear' in student) {
    console.log("passyear:", student.passyear);
}
else {
    console.log('pass year is not found');

}

console.log('--------------------------------------------------------------------------------------------');

//question

var car = {
    name : 'boleno',
    model : 'hatch batch',
    manufacture : 'maruthi',
    price : '10lakhs'
}
//1. w.a.p to print the car name and manufacture name
console.log(car['name']);
console.log(car['manufacture']);
console.log('---------------------');




//2.check 'model' key is present in object or not if present print the value
if ('model' in car) {
    console.log("model:", car.model);
} else {
    console.log(" not found");
}
//or
console.log('model' in car ?`car model is ${car.model}`:'not present');
console.log('---------------------');




//3.add 'varient'  key with the value 'manual' to the given object
car['varient']=['manual']
console.log(car);
console.log('---------------------');


//4.add a new value 'automatic' to the varient key
car['varient'].push('automatic')
console.log(car);
console.log('---------------------');

//5.add a new key as 'color' with 'red,'blue','yellow'
student = Object.assign(car, { color: 'red,yellow,blue'})
console.log(car);
console.log('-----------');
//or we can use adding method


console.log('--------------------------------------------------------------------------------------------');

//question

txt = 'hai hello all hello world all'
//w.a.p to find the word of the given text
//o/p=(hai:1,hello:2,all:2,world:1)
op={}
words = txt.split(' ')
console.log(words);

for(let item of words){
    if(item in op){
        op[item]+=1
    }
    else{
        op[item]=1
    }
}
console.log(op);

//array singleline method
op={}
txt.split(' ').forEach((item)=>item in op?op[item]+=1:op[item]=1)
console.log(op);
console.log('-------------------------------------------------------------------------------------------');


//HW
//w.q.p to display the number count and display as object with key as the number and value as the count

//w.a.p to print the first recursive/repeated letter from the given pattern
pattern = 'ABCDBCAD'//0P='B'
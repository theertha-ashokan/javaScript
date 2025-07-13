//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
highestPositive = covid_data.reduce((a, b) => a[2] > b[2] ? a : b);
console.log( highestPositive[1]);
console.log('---------------------------');

// 2. District having Highest 1st dose vaccine
highestFirstDose = covid_data.reduce((a, b) => a[5] > b[5] ? a : b);
console.log( highestFirstDose[1]);
console.log('---------------------------');


//3. district having lowest death rate
lowesttDeathrate = covid_data.reduce((a,b)=>a[3]<b[3]?a:b)
console.log(lowesttDeathrate[1]);
console.log('---------------------------');


//4. sort data with +ve case in descending order
covidpositive = covid_data.sort((a,b)=>b[2]-a[2]).forEach((item)=>console.log(item[1]));
console.log(covidpositive);
console.log('---------------------------');


//5. is district with +ve cases > 15000

hasHighPositive = covid_data.some(item => item[2] > 15000);
console.log(hasHighPositive);
console.log('------------------------------');

// 6. Sort data with 1st dose vaccine ascending order
sortedFirstDose = covid_data.sort((a, b) => a[5] - b[5]);
console.log( sortedFirstDose.map(item => item[1]));
console.log('----------------------------------');


// 7. Print Thrissur details
thrissurDetails = covid_data.find(item => item[1] === 'Thrissur');
console.log( thrissurDetails);
console.log('---------------------------');


// 8. Total number of positive cases
totalPositive = covid_data.reduce((sum, item) => sum + item[2], 0);
console.log(totalPositive);
console.log('---------------------------');


// 9. Total number of cured cases
totalCured = covid_data.reduce((sum, item) => sum + item[4], 0);
console.log( totalCured);
console.log('---------------------------');


// 10. Cured cases in Idukki
idukkiCured = covid_data.find(item => item[1] === 'Idukki')[4];
console.log( idukkiCured);
console.log('---------------------------');

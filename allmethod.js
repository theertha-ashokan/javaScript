//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
products.forEach(product => console.log(product[1]));
console.log('---------------------------');


//2. display product name whose price < Rs.50

products.filter(item => item[2]< 50).forEach((item) => console.log(item[1]));
console.log('---------------------------');


//3. print price of oreo
 oreo = products.find(product => product[1] === 'oreo');
console.log(oreo[2]);
 console.log('----------------------------');


//4. print costly product name
 costly=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
 console.log(costly[1]);
 console.log('----------------------------');
 

//5. display out of stock product name
products.filter(product => product[3] === 0).forEach(product => console.log(product[1]));
 console.log('----------------------------');


//6. sort products based on stock in decsending order
sortstock = products.sort((pro1,pro2)=>pro2[3]-pro1[3])
console.log(sortstock);



//7. print product name  having maximum available stock
maxStock = products.reduce((pro1, pro2) => pro2[3] > pro1[3] ? pro2 : pro1);
console.log(maxStock[1]);
console.log('-------------------');


//8. is there any product that can be purchased by Rs. 10
x = products.some((pro)=>pro[2]<=10)
console.log(x?'yes':'no');
console.log('-------------------');



//9. Is there any product in the range of 10 to 30 rs.
range = products.some(pro => pro[2] >= 10 && pro[2] <= 30);
console.log(range ? "Yes" : "No");


//10. print all products in the range of 10 to 30 rs.
products.filter(product => product[2] >= 10 && product[2] <= 30).forEach(product => console.log(product));
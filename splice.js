//splice program

a = ['manu','mini','max']
console.log(a);

//add the name anu as the third item

//splice(startindex,delete_count,items...)
//here starting index isn 2 ,becoz we want to add the name as 3rd position
a.splice(2,0,'anu')
console.log(a);

//delete anu and add miller instead
a.splice(2,1,'miller')
console.log(a);

//delete max

a.splice(3,1)
console.log(a);

//add saay

a.splice(3,0,'saay')
console.log(a);

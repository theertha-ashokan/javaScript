exp = '10*2-3'
try{
let result = eval(exp)
console.log(result);
}
catch{
    console.log('error due to incorrect expression');
    
}
finally{
    console.log('exception ended');
}

console.log('---------------------------');



exp = '///////***10**********2-3'
try {
    let resultt = eval(exp)
    console.log(resultt);
}
catch {
    console.log('error due to incorrect expression');

}

finally { console.log('exception ended'); }

